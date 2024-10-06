"use client";
import React, { useState } from "react";

export default function Admin() {

    const [open, setOpen] = React.useState(false);  // Is dialogue open

    const openAddChore = () => {  // Open an add chore dialog
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    };

    // CPU 

    // GPU

    // cooling

    // harddrive

    // ram

    // case

    // psu 

    // motherboard


    return (
        <>
            <p> Uplaod page </p>
        </>
    );
}