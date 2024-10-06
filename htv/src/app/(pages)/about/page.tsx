"use client";
import { getSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import React from "react";

export default function About() {

    return (
        <>
            <h1> What we do</h1>
            <p> Our website will allow you to upload any of your old comptuer parts  </p>
            <h1> Mission</h1>
            <p> Crowdsourcing e-waste to make technological literacy attainable to communities across the globe.  </p>


        </>
    );
}