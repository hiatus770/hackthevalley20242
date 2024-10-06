import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST (request: Request) {
    const db = neon(process.env.DATABASE_URL as string);

    try {
        // Get the ID from the request URL
        const { user_name, address, contact, specs, reason, budget } =  await request.json();
        //console.log(user_id, specs, reason, budget);
        
        if (!user_name) {
            return NextResponse.json({ success: false, message: 'Name is required' }, { status: 400 });
        }

        // SQL query to delete a row from the CPU table
        const query = `
            INSERT INTO REQUESTS (user_name, address, contact, specs, reason, budget)
            VALUES (${"'" + user_name+"'"}, ${"'"+address+"'"}, ${"'"+contact+"'"}, ${"'" + specs + "'"}, ${"'" + reason + "'"}, ${"'"+budget+"'"});
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
