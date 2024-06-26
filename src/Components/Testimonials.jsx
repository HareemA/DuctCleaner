import React, { useEffect, useState, useRef } from 'react';
import TestimonialsData from "../Data/TestimonialsData";

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
  }, [refs, rootMargin]); 

  return isIntersecting;
}

export default function Testimonials() {
  const headingRef = useRef(null);
  const isVisibleHeading = useOnScreen([headingRef]);
  const cardRefs = useRef(TestimonialsData.map(() => React.createRef()));
  const isVisibleCards = useOnScreen(cardRefs.current);

  return (
    <section className="testimonial--section" id="testimonial">
      <div className="portfolio--container">
        <p className="section--title">Clients Feedback</p>
        <h2 ref={headingRef} className={`services--section--heading ${isVisibleHeading[0] ? 'animation1' : ''}`}>
          Customer Feedback
        </h2>
      </div>
      <div className="portfolio--section--container">
        {TestimonialsData.map((item, index) => (
          <div key={index} className={`testimonial--section--card ${isVisibleCards[index] ? 'animation1' : ''}`} ref={cardRefs.current[index]}>
            <div className="testimonial--section--card--review">
              {Array.from({ length: 5 }, (reviews, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                >
                  <path
                    d="M12.0945 0.953177C12.5528 -0.135435 14.1138 -0.135434 14.5722 0.95318L17.2772 7.37836C17.4705 7.8373 17.9074 8.15087 18.4089 8.19059L25.4302 8.74669C26.6199 8.84091 27.1022 10.3076 26.1959 11.0746L20.8464 15.6016C20.4643 15.925 20.2973 16.4324 20.4141 16.9158L22.0484 23.6847C22.3253 24.8315 21.0625 25.7381 20.044 25.1235L14.0327 21.4961C13.6033 21.237 13.0633 21.237 12.634 21.4961L6.62265 25.1235C5.60415 25.7381 4.34127 24.8315 4.61818 23.6847L6.25256 16.9158C6.3693 16.4324 6.20243 15.925 5.82034 15.6016L0.47075 11.0746C-0.435624 10.3076 0.0467572 8.84091 1.23639 8.74669L8.25781 8.19059C8.75933 8.15087 9.19621 7.8373 9.38942 7.37836L12.0945 0.953177Z"
                    fill="#FFB61E"
                  />
                </svg>
              ))}
            </div>
            <p className={`text-md ${isVisibleCards[index] ? 'animation1' : ''}`}>{item.description}</p>
            <div className="testimonial--section--card--author--detail">
              <img src={item.src} alt="Avatar" />
              <div>
                <p className="text-md testimonial--author--name">
                  {item.author_name}
                </p>
                <p className="text-md testimonial--author--designation">
                  {item.author_designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
