import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function POST (request: Request) {
    const db = neon(process.env.DATABASE_URL as string);

    try {
        // Get the ID from the request URL
        const { id, item } =  await request.json();
        
        if (!id) {
            return NextResponse.json({ success: false, message: 'ID is required' }, { status: 400 });
        }

        // SQL query to delete a row from the CPU table
        const query = `
            DELETE FROM ${item} 
            WHERE id = ${id}
        `;

        const result = await db(query);

        // Check if any rows were deleted
        if (result.rowCount === 0) {
            return NextResponse.json({ success: false, message: 'No row found with the given ID' }, { status: 404 });
        }

        // Return success message
        return NextResponse.json({ success: true, data: result }); // Return the deleted row if you used RETURNING
    } catch (error) {
        console.error('Error deleting part:', error);
        return NextResponse.json({ success: false, message: 'Error deleting part'}, { status: 500 });
    }
}
