import { NextResponse } from "next/server";
import {hash} from 'bcrypt';
import { neon } from "@neondatabase/serverless";

// localhost:3000/api/auth/register
export async function POST(request: Request){
    try {
        let {email, password, type, name, phone, address} = await request.json();   
        // Validate the email and the password here!
        console.log({email, password, type});
        
        const hashedPassword = await hash(password, 10);
        

        if (type === null){
            type = 'user';
        }

        // 3 types: company user admin 

        const sql = neon(process.env.DATABASE_URL as string); 
        const response = await sql `
        INSERT INTO users (email, password, type, name, phone, address) 
        VALUES (${email}, ${hashedPassword}, ${type}, ${name}, ${phone}, ${address})
        `; 
        console.log({response});

    } catch (e) {
        console.log({ e }); 
        return NextResponse.json({message: "Error!"}); // TODO: needs to be handled better
    }

    return NextResponse.json({message: "Success!"});
}