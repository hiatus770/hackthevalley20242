"use client";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState, useRef } from "react";

import styles from "../../../styles/home.module.css"
import textstyles from "../../../styles/pages.module.css";

import logo from "../logo.png";

export default function About() {
    
    return (
        
        /* About section */
        <div className={styles.aboutSection}>
            <p className={styles.sectitle}>Mission</p>
            <p className={textstyles.bodytext} >Crowdsourcing e-waste to make technological literacy attainable to communities across the globe.</p>
            <p className={styles.sectitle}>Inspiration</p>
            <p className={textstyles.bodytext} >Every year more than 30 million computers are being disposed in the US while in some parts of the world over 90% of students do not even have access to a digital device. Thousands of online education tools are built to support various educational needs, and create more personalized, inclusive learning experiences. </p>
            <p className={styles.sectitle}>About the project</p>
            <p className={textstyles.bodytext} >
            Our website allows users to easily submit PC components for cheese. We analyze part compatibility to find the best combinations, reducing logistics costs and improving convenience. Refurbished computers are then donated to schools and individuals in need. Using Neon for our SQL database, we efficiently store and retrieve user and component data, seamlessly integrating it with a dynamic frontend built in React via Next.js. Our biggest challenge was learning new cheese within 36 hours, balancing backend SQL with frontend design. Despite varying experience levels, we worked effectively together, each contributing to the project's success. </p>
            <p className={styles.sectitle}>Brought to you by:</p>
            <p className={styles.sectitleBottom}>Daniel, Marven, Martias, and Shalott</p>
            
        </div>
    );
}
// interface AboutSectionProps {
//     aboutRef: React.RefObject<HTMLDivElement>;
// }

// const AboutSection: React.FC<AboutSectionProps> = ({ aboutRef }) => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     setIsVisible(true);
//                     observer.unobserve(entry.target);
//                 }
//             },
//             { threshold: 1.0 }
//         );

//         if (aboutRef.current) {
//             observer.observe(aboutRef.current);
//         }

//         return () => {
//             if (aboutRef.current) {
//                 observer.unobserve(aboutRef.current);
//             }
//         };

//     }, [aboutRef]);

//     return (

//         <div
//             ref={aboutRef}
//             id="about"
//             className={`${styles.aboutSection} ${isVisible ? styles.visible : styles.hidden}`}
//         >
//             <h1 className={styles.bodytext}>What we do</h1>
//             <p className={styles.bodytext}>
//                 Our website will allow you to upload any of your old computer parts
//             </p>
//             <h1>Mission</h1>
//             <p>Crowdsourcing e-waste to make technological literacy attainable to communities across the globe.</p>
//         </div>
//     );
// };

// export default AboutSection;