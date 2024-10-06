"use client";
import React from "react";
import styles from '../../styles/style.module.css';
import { useState } from 'react';
import Logout from "./logout";
import LoginInOut from "./loginlogout";
import logo from '../../logo.png';
import { getSession } from "next-auth/react";

// for title bar only
import navStyle from '../../styles/home.module.css';

export default function TitleBar() {
    interface Session {
        user: {
            type: string;
        };
    }

    const [session, setSession] = useState<Session | null>(null);
    React.useEffect(() => {
        async function checkSession() {
            const session = await getSession();
            setSession(session as any);
            console.log(JSON.stringify(session));
        }
        checkSession();
    }, []);

    // if the user is an admin show the admin button

    if (!!session && session.user.type === "admin") {
        return (
            <div className={styles.bigContainer}> {/**something  */}

                {/* title container */}
                <div className={navStyle.headerContainer}>
                    <img className={navStyle.logo} src={logo.src} alt="logo" />
                    <h1 style={{ fontFamily: 'Ubuntu Mono, monospace', fontSize: '60px', fontWeight: 'bold', color: 'black' }}>
                        Bit by Bit
                    </h1>
                </div>

                {/* navbar */}
                < nav className={navStyle.navbar} >
                    <ul className={navStyle.menuItems}>
                        <li> <a href="/about" >About</a> </li>
                        <li> <a href="/upload" >Upload</a> </li>
                        <li> <a href="/request" >Request</a> </li>
                        <li> <a href="/admin" >Admin</a> </li>
                        <li> <Logout /> </li>
                    </ul>
                </nav>
            </div >

        );
    } else if (!!session) {

        const [isHovered, setIsHovered] = useState(false);


        return (
            <>
                <div className={navStyle.headerContainer}>
                    <img className={navStyle.logo} src={logo.src} alt="logo" />
                    <a href="/"
                        style={{
                            fontFamily: 'Ubuntu Mono, monospace',
                            fontSize: '60px',
                            fontWeight: 'bold',
                            color: isHovered ? '#0070f3' : 'black',
                        }}>
                        Bit by Bit
                    </a>
                </div >

                <nav className={styles.Titlebar} >

                    <div className={styles.menu}>
                        <ul className={styles.menuItems}>
                            <li> <a href="/about" >About</a> </li>
                            <li> <a href="/upload" >Upload</a> </li>
                            <li> <a href="/request" >Request</a> </li>
                            <li> <Logout /> </li>
                        </ul>
                    </div>
                </nav >
            </>
        );
    } else {
        return (
            <div className={styles.bigContainer}> {/**something  */}

                {/* title container */}
                <div className={navStyle.headerContainer}>
                    <img className={navStyle.logo} src={logo.src} alt="logo" />
                    <h1 style={{ fontFamily: 'Ubuntu Mono, monospace', fontSize: '60px', fontWeight: 'bold', color: 'black' }}>
                        Bit by Bit
                        <a href="/" ></a>
                    </h1>
                </div>

                {/* navbar */}
                < nav className={navStyle.navbar} >
                    <ul className={navStyle.menuItems}>
                        <li> <a href="/about" >About</a> </li>
                        <li> <a href="/upload" >Upload</a> </li>
                        <li> <a href="/request" >Request</a> </li>
                        <li> <a href="/login">Login</a> </li>
                    </ul>
                </nav>
            </div >
        );
    }
}