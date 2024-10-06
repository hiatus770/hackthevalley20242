import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
    const db = neon(process.env.DATABASE_URL as string); 
    try {

        const { 
            user_name, address, contact, model_name, form_factor, 
            description, image, rest
        } = await request.json();

        // SQL query to insert data into the CPU table
        const query = `
            INSERT INTO PCCASE 
            (user_name, address, contact, model_name, form_factor,description, image, rest)
            VALUES (${"'" + user_name + "'"}, ${"'" + address+"'"}, ${"'"+contact+"'"}, ${"'"+model_name+"'"}, ${"'"+form_factor+"'"}, ${"'"+description+"'"}, ${"'"+image+"'"}, ${"'"+rest+"'"}) 
            RETURNING *;
        `;
        console.log("checkpoint 3")
        // Map the extracted variables to the corresponding columns
        const values = [
            user_name, 
            address, 
            contact || null,
            model_name || null, 
            form_factor || null, 
            description || null, 
            image || null,
            rest || null
        ];
        console.log("checkpoint 4");
        // Execute the query using Neon
        const result = await db(query);
        console.log(result);

        // Return the inserted data to the frontend
        return NextResponse.json({ success: true, result});
    } catch (error) {
        console.error('Error inserting MB:', error);
        return NextResponse.json({ success: false, message: 'shit went rlly wrong'}, { status: 500 });
    }
}

