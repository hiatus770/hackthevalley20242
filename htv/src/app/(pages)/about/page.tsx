"use client";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import React from "react";

export default function About() {

    return (
        <>
            <h1>What we do</h1>
            <p> Our website will allow you to upload any of your old comptuer parts  </p>
            <h1>Our mission</h1>
            <p> About us </p>


        </>
    );
}