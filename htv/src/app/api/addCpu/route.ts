import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST(request: Request) {
    const db = neon(process.env.DATABASE_URL as string); 

    try {
        const { 
            name, address, contact, model, socket, chipset, powerConsumption, memorySupport, 
            pcieVersion, imageURL, rest
        } = await request.json();

        // SQL query to insert data into the CPU table
        const query = `
            INSERT INTO CPU 
            (user_name, address, contact, model_name, socket_type, chipset, TDP, DDR, PCIe, image, rest) 
            VALUES 
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
            RETURNING *;
        `;

        // Map the extracted variables to the corresponding columns
        const values = [
            name, 
            address, 
            contact || null,
            model || null, 
            socket || null, 
            chipset || null, 
            powerConsumption || null, 
            memorySupport || null, 
            pcieVersion || null, 
            imageURL || null, 
            rest || null
        ];

        // Execute the query using Neon
        const result = await db`${query}`;
        Console.log(result)

        // Return the inserted data to the frontend
        return NextResponse.json({ success: true, result});
    } catch (error) {
        console.error('Error inserting CPU:', error);
        return NextResponse.json({ success: false, message: 'shit went wrong'}, { status: 500 });
    }
}