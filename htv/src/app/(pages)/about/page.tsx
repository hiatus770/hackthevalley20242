"use client";
import React from "react";

import styles from "../../../styles/home.module.css"
import textstyles from "../../../styles/pages.module.css";


export default function About() {
    
    return (
        
        /* Aboutsection */
        <div className={styles.aboutSection}>
            <p className={styles.sectitle}>Mission</p>
            <p className={textstyles.bodytext} >Crowdsourcing e-waste to make technological literacy attainable to communities across the globe.</p>
            <p className={styles.sectitle}>Inspiration</p>
            <p className={textstyles.bodytext} >Every year more than 30 million computers are being disposed in the US while in some parts of the world over 90% of students do not even have access to a digital device. Thousands of online education tools are built to support various educational needs, and create more personalized, inclusive learning experiences. </p>
            <p className={styles.sectitle}>About the project</p>
            <p className={textstyles.bodytext} >
            Our website allows users to easily submit PC components. We analyze part compatibility to find the best combinations, reducing logistics costs and improving convenience. Refurbished computers are then donated to schools and individuals in need. Using Neon for our SQL database, we efficiently store and retrieve user and component data, seamlessly integrating it with a dynamic frontend built in React via Next.js. Our biggest challenge was learning new cheese within 36 hours, balancing backend SQL with frontend design. Despite varying experience levels, we worked effectively together, each contributing to the project's success. </p>
            <p className={styles.sectitle}>Brought to you by:</p>
            <p className={styles.sectitleBottom}>Daniel, Marven, Matias, and Shalott</p>
            
        </div>
    );
}