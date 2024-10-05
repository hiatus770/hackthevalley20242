"use client"; 
import React from "react";
import styles from '../../styles/style.module.css';
import { useState } from 'react'; 
import Logout from "./logout";
import LoginInOut from "./loginlogout";
// import ''./TitleBar.css'; 
import logo from '../../logo.png'; 

export default function TitleBar() {

    return (    
        <>
        < nav className={styles.Titlebar} >
            <img className={styles.logo} src={logo.src} alt="logo" />
            <a className={styles.title} href="/">Bit by Bit</a>
            <div className={styles.menu}> 
                <ul className={styles.menuItems}>
                    <li> <a href="/about" >About</a> </li>
                    <li> <a href="/admin" >Admin</a> </li>
                    <li> <a href="/upload" >Upload</a> </li>
                    <li> <a href="/request" >Request</a> </li>
                    <li> <Logout/> </li>
                </ul>
            </div>
        </nav >
        </>
    ); 
}