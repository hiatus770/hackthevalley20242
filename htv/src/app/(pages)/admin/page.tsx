"use client"; 
import { getSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";

export default function Admin() {

    const router = useRouter(); 
    React.useEffect(() => {
        async function checkSession() {
            const session = await getSession();
            if (!session) {
                router.push("/about")
            }
        }
        checkSession();
    }, []);


    // Check if user is admin
    // If not, redirect to homepage
    // if (session?.user?.type !== 'admin') {
    //     redirect("/");
    // }   

    return (
        <>
            <p> Admin page </p>
        </>
    );
}