import React, { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import Reveal from '../animation/Reveal';
import ServiceData from '../Data/ServiceData';

export default function Services() {
  return (
    <div className='service-section-card-container'>
        {ServiceData.map(data => (
              data.url ? 
              <Link to='SpecialOffers'>
                <div className="services-section-card"  key={data.id} style={{backgroundImage:`url(${data.img})`, backgroundSize:'cover' , backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
                  <h2 className="service-card-heading"> <span>{data.heading}</span></h2>
                </div> 
              </Link>
              :
              <div className="services-section-card"  key={data.id} style={{backgroundImage:`url(${data.img})`, backgroundSize:'cover' , backgroundRepeat:'no-repeat', backgroundPosition:'center'}}>
                  <h2 className="service-card-heading"> <span>{data.heading}</span></h2>
              </div> 
          
        ))}
    </div>
    
  )
}

// function useOnScreen(refs, rootMargin = "0px") {
//   const [isIntersecting, setIntersecting] = useState(Array(refs.length).fill(false));

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           const index = refs.findIndex(ref => ref.current === entry.target);
//           if (index !== -1) {
//             setIntersecting(prev => [...prev.slice(0, index), entry.isIntersecting, ...prev.slice(index + 1)]);
//           }
//         });
//       },
//       { rootMargin }
//     );

//     refs.forEach(ref => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       refs.forEach(ref => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, [refs, rootMargin]); // Depend on `refs` and `rootMargin` to re-observe if they change

//   return isIntersecting;
// }

  // Create a ref for each item
  // const itemRefs = useRef(ServicesData.map(() => React.createRef()));
  // const isVisibleList = useOnScreen(itemRefs.current);
  // const titleRef = useRef(null);
  // const headingRef = useRef(null);
  // const isVisibleTitle = useOnScreen([titleRef]);
  // const isVisibleHeading = useOnScreen([headingRef]);

  // return (
  //   <section className="services--section" id="ourServices">
  //     <div className="portfolio--container">
  //       <p ref={titleRef} className="section--title">GTA Duct Cleaning Services</p>
  //       <h2 ref={headingRef} className={`services--section--heading ${isVisibleHeading[0] ? 'animation1' : ''}`}>
  //         <Link to='/Services' className="services--section--heading--link">OUR SERVICES</Link>
  //       </h2>
  //     </div>
  //     <div className="services--section--container">
  //       {ServicesData.map((item, index) => (
  //         <div key={index} className="services--section--card" ref={itemRefs.current[index]}>
  //           <div className={`services--section--img ${isVisibleList[index] ? 'animation1' : ''}`}>
  //             <img src={item.src} alt="Product Chain"/>
  //           </div>
  //           <div className="services--section--card--content">
  //             <h3 className={`services--section--title ${isVisibleList[index] ? 'animation1' : ''}`}>{item.title}</h3>
  //             <p className={`services--section--description ${isVisibleList[index] ? 'animation1' : ''}`}>{item.description}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </section>
  // );




    // TODO: add animations to services card: code:
//   import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import ServiceData from '../Data/ServiceData';

// export default function Services() {
//   return (
//     <div className="service-section-card-container">
//       {ServiceData.map((data) => (
//         <AnimatedServiceCard key={data.id} data={data} />
//       ))}
//     </div>
//   );
// }

// function AnimatedServiceCard({ data }) {
//   const { ref, inView } = useInView({
//     triggerOnce: false,
//     threshold: 0.5, // Adjust threshold as needed
//   });

//   const variants = {
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//     hidden: { opacity: 0, y: 50 },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       className="services-section-card"
//       style={{
//         backgroundImage: `url(${data.img})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         position: 'relative', // Ensure consistent positioning during animation
//       }}
//       initial="hidden"
//       animate={inView ? 'visible' : 'hidden'}
//       variants={variants}
//     >
//       <Link to="/ServicesInner">
//         <h2 className="service-card-heading">
//           <span>{data.heading}</span>
//         </h2>
//       </Link>
//     </motion.div>
//   );
// }

