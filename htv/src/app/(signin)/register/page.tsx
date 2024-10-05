import { FormEvent } from "react";
import Form from "./form";
import { getServerSession } from "next-auth";
import { redirect, RedirectType } from "next/navigation";

export default async function RegisterPage() {
    const session = await getServerSession();

    if (!session) {
        return (<Form />); 
    } else {
        // redirect("") TBD we dont know where our main page is yet :) 
        redirect(""); 
    }
}