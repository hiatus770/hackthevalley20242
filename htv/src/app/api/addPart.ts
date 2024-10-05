import { NextResponse } from 'next/server';
import { neon } from "@neondatabase/serverless";

// Function to add a row to the table
export default async function addRowTo(db, section, columns, values) {
    try {
        if (columns.length !== values.length) {
            return NextResponse.json({ success: false, message: 'Column count does not match value count' }, { status: 400 });
        }
        
        // Dynamically generate placeholders for the values (e.g., $1, $2, $3)
        const valuePlaceholders = values.map((_, index) => `$${index + 1}`).join(', ');

        // Construct the INSERT query with the column names and value placeholders
        const query = `
            INSERT INTO ${section} (${columns.join(', ')})
            VALUES (${valuePlaceholders})
            RETURNING *;
        `;

        // Execute the query with the values to insert the row
        const result = await db.sql(query, values);

        // Return the newly inserted row to the frontend
        return NextResponse.json({ success: true, data: result.rows });
    } catch (error) {
        console.error('Error inserting row:', error);
        return NextResponse.json({ success: false, message: 'Error adding row' }, { status: 500 });
    }
}