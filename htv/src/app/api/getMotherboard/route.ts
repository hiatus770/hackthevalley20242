import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless";


export async function POST(request: Request) {
    
    const db = neon(process.env.DATABASE_URL as string); 

    try {
        // Query the database with Neon
        const result = await db`SELECT * FROM MOTHERBOARD`;

        // Return the inserted data to the frontend
        return NextResponse.json({ success: true, data: result});
    } catch (error) {
        console.error('Error inserting part:', error);
        return NextResponse.json({ success: false, message: 'Error fetching MBs' }, { status: 500 });
    }
}