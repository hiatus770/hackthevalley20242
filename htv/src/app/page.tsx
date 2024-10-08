"use client";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState, useRef } from "react";
import styles from "../styles/home.module.css";
import logo from "../logo.png";

export default function Home() {

  return (
    <div className={styles.bigContainer}>

      {/* title container */}
      <div className={styles.headerContainer}>
        <img className={styles.logo} src={logo.src} alt="logo" />
        <h1 className={styles.title}>Bit by Bit</h1>
      </div>

      {/* <p className={styles.desc}>Turning E-waste into E-opportunities NO</p> */}

      {/* navbar */}
      < nav className={styles.navbar} >
        <ul className={styles.menuItems}>
          <li><a href="/about" >About</a></li>
          <li> <a href="/upload" >Upload</a> </li>
          <li> <a href="/request" >Request</a> </li>
        </ul>
      </nav>

      <li className={styles.login}> <a href="/admin" >Login</a> </li>

    </div>
  );
}
