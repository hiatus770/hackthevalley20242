"use client"; 
import React from "react";
import styles from '../../styles/style.module.css';
import { useState } from 'react'; 
import Logout from "./logout";
import LoginInOut from "./loginlogout";
// import ''./TitleBar.css'; 
import logo from '../../logo.png'; 
import { getSession } from "next-auth/react";

export default function TitleBar() {

    const [session, setSession] = useState(null);
    React.useEffect(() => {
        async function checkSession() {
            const session = await getSession();
            setSession(session as any);
            console.log(JSON.stringify(session));
        }
        checkSession();
    }, []);

    // if the user is an admin show the admin button
    
    return (    
        <>
        < nav className={styles.Titlebar} >
            <img className={styles.logo} src={logo.src} alt="logo" />
            <a className={styles.title} href="/">Bit by Bit</a>
            <div className={styles.menu}> 
                <ul className={styles.menuItems}>
                    <li> <a href="/about" >About</a> </li>
                    <li> <a href="/upload" >Upload</a> </li>
                    <li> <a href="/request" >Request</a> </li>
                    <li> <a href="/admin" >Admin</a> </li>
                    <li> <Logout/> </li>
                </ul>
            </div>
        </nav >
        </>
    ); 
}