"use client";
import React, { useState, useCallback } from 'react';
import { Button } from '@mui/material';
import AddItemDialog from './addItemDialog'; // Adjust the import path as necessary
import styles from "../../../styles/home.module.css";
import buttonStyle from "../../../styles/card.module.css";
import { getSession } from 'next-auth/react';

export default function Request() {
    const [open, setOpen] = useState(false);  // Is dialogue open
    const [item, setItem] = useState("cpu");  // Item type

    const [session, setSession] = useState(null);

    React.useEffect(() => {
        async function checkSession() {
            const session = await getSession();
            setSession(session);
            console.log("USER DATA FROM REQUEST PAGE: ", JSON.stringify(session));
        }
        checkSession();
    }, []);


    const convertImageToBase64 = (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                const reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                }
                reader.readAsDataURL(xhr.response);
            };
            xhr.onerror = function () {
                reject(new Error('Failed to load image'));
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();
        });
    };

    const handleSubmit = () => {


        const user_name = session.user.name;
        const address = session.user.address
        const contact = session.user.phone;

        const specs = document.getElementById("specs")?.value ?? null;
        const reason = document.getElementById("reason")?.value ?? null;
        const budget = document.getElementById("budget")?.value ?? null;

        const uploadItem = () => {

            fetch("/api/createRequest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_name: user_name,
                    address: address,
                    contact: contact,
                    specs: specs,
                    reason: reason,
                    budget: budget
                }),
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log("Data: ", data);
            }).catch((error) => {
                console.error("Error:", error);
            }).finally(() => {
                handleClose();
            });


        };

        uploadItem();
    };

    const openUpload = useCallback((item) => {  // Open an add chore dialog
        console.log("Opening upload for: ", item);
        setItem(item);
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <AddItemDialog open={open} handleClose={handleClose} handleSubmit={handleSubmit} item={item} />
            <div className={styles.buttons} style={{
                display: 'flex',          // Use Flexbox
                justifyContent: 'center', // Center horizontally
                alignItems: 'center',     // Center vertically
            }}>
                <Button onClick={() => openUpload()}>Make a request! </Button>
            </div>
        </>
    );
}