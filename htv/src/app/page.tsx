"use client";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useState } from "react";

import MainNav from './mainNavBar.tsx';

export default function Home() {

  return (
    <>
      <h1>Bit by Bit</h1>
      <p>Description</p>
      <MainNav />

    </>
    );

}
