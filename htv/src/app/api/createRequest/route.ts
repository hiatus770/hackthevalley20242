import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST (request: Request) {
    const db = neon(process.env.DATABASE_URL as string);

    try {
        // Get the ID from the request URL
        const { UserId, Specs, Reason, Budget } =  await request.json();
        //console.log(user_id, specs, reason, budget);
        
        if (!UserId) {
            return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
        }

        // SQL query to delete a row from the CPU table
        const query = `
            INSERT INTO REQUESTS (user_id, specs, reason, budget)
            VALUES (${UserId}, ${"'" + Specs + "'"}, ${"'" + Reason + "'"}, ${Budget});
        `;

        console.log(query);

        const result = await db(query);

        // Return success message
        return NextResponse.json({ success: true, data: result }); // Return the deleted row if you used RETURNING
    } catch (error) {
        console.error('Error deleting part:', error);
        return NextResponse.json({ success: false, message: 'Error deleting part'}, { status: 500 });
    }
}
