"use client";
import React from "react";

export default function Admin() {

    const [data, setData] = React.useState(null);


    function testApi() {
        fetch("/api/getMotherboard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                
            }),
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data); // PRINT THE RESULT FROM THE API CALL 
        }).catch((error) => {
            console.log("Error: ", error);
        }); 
    }

    return (
        <>
            <h1>TESTING PAGE</h1>
            <button onClick={testApi}>Test API</button>
        </>
    );
}