import React, { useEffect, useState, useRef } from 'react';
import ServicesData from "../Data/ServicesData";
import { Link } from "react-router-dom";

function useOnScreen(refs, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(Array(refs.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          const index = refs.findIndex(ref => ref.current === entry.target);
          if (index !== -1) {
            setIntersecting(prev => [...prev.slice(0, index), entry.isIntersecting, ...prev.slice(index + 1)]);
          }
        });
      },
      { rootMargin }
    );

    refs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      refs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, [refs, rootMargin]); // Depend on `refs` and `rootMargin` to re-observe if they change

  return isIntersecting;
}

export default function Services() {
  // Create a ref for each item
  const itemRefs = useRef(ServicesData.map(() => React.createRef()));
  const isVisibleList = useOnScreen(itemRefs.current);
  const titleRef = useRef(null);
  const headingRef = useRef(null);
  const isVisibleTitle = useOnScreen([titleRef]);
  const isVisibleHeading = useOnScreen([headingRef]);

  return (
    <section className="services--section" id="ourServices">
      <div className="portfolio--container">
        <p ref={titleRef} className="section--title">GTA Duct Cleaning Services</p>
        <h2 ref={headingRef} className={`services--section--heading ${isVisibleHeading[0] ? 'animation1' : ''}`}>
          <Link to='/Services' className="services--section--heading--link">OUR SERVICES</Link>
        </h2>
      </div>
      <div className="services--section--container">
        {ServicesData.map((item, index) => (
          <div key={index} className="services--section--card" ref={itemRefs.current[index]}>
            <div className={`services--section--img ${isVisibleList[index] ? 'animation1' : ''}`}>
              <img src={item.src} alt="Product Chain"/>
            </div>
            <div className="services--section--card--content">
              <h3 className={`services--section--title ${isVisibleList[index] ? 'animation1' : ''}`}>{item.title}</h3>
              <p className={`services--section--description ${isVisibleList[index] ? 'animation1' : ''}`}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
