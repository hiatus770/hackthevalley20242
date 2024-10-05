import { FormEvent } from "react";
import Form from "./form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginPage(){
    const session = await getServerSession();

    console.log("NOW REDIRECTING . . ."); 
    console.log(JSON.stringify(session)); 
    if (!!session) { 
        redirect("/about");
    }
    return (
        <Form /> 
    ); 
}