'use client';
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";


export default function Logout(){
    return (
        <a onClick={()=>{
            signOut(); 
        }}>Logout</a>
    );
}