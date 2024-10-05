

import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless";


export async function POST(request: Request) {
    
    const db = neon(process.env.DATABASE_URL as string); 

    try {
        const { part_type, brand, model, specifications, compatibility } = await request.json();

        // SQL query to insert the new part into the `pc_parts` table
        const query = `
            INSERT INTO pc_parts (part_type, brand, model, specifications, compatibility)
            VALUES ($1, $2, $3, $4, $5) RETURNING *;
        `;

        const values = [
            part_type,
            brand,
            model,
            JSON.stringify(specifications),  // Convert the object to JSON
            JSON.stringify(compatibility)    // Convert the object to JSON
        ];

        // Execute the query using Neon
        const result = await db`
        INSERT INTO pc_parts (part_type, brand, model, specifications, compatibility)
        VALUES ($1, $2, $3, $4, $5) RETURNING *;
        `

        // Return the inserted data to the frontend
        return NextResponse.json({ success: true, data: result.rows[0] });
    } catch (error) {
        console.error('Error inserting part:', error);
        return NextResponse.json({ success: false, message: 'Error inserting part' }, { status: 500 });
    }
}

/*
export async function POST(request: Request) {
    const { send } = await request.json();  
    console.log("DATA FROM FRONTEND: ", send); 
    // Return json to clientsid
    return NextResponse.json({message: "Data from server!"});
}*/