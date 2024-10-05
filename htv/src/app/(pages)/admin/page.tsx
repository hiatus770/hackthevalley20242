"use client"; 
import { getSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import React from "react";

export default function Admin() {

    const router = useRouter(); 
    React.useEffect(() => {
        async function checkSession() {
            const session = await getSession();
            if (!session) {
                router.push("/about")
            }
        }
        checkSession();
    }, []);

    // Can either be "parts" which it displays every part, or "pcs" which displays every possible pc build 
    const [pageState, setPageState] = React.useState("parts");
    const [coolingParts, setCoolingParts] = React.useState([]);
    const [cpuParts, setCpuParts] = React.useState([]); 
    const [gpuParts, setGpuParts] = React.useState([]);
    const [ramParts, setRamParts] = React.useState([]);
    const [harddriveParts, setHarddriveParts] = React.useState([]);
    const [psuParts, setPsuParts] = React.useState([]);
    const [motherboardParts, setMotherboardParts] = React.useState([]);
    const [pccaseParts, setPccaseParts] = React.useState([]);

    // Potential PCS received from /getPcs endpoint 
    const [pcs, setPcs] = React.useState([]);

    




    // If on parts page return parts display (use the /getCpus, /getGpus, etc. endpoints and then display them iteratively in a ul) 
    // If on pcs page return pcs display (use the /getPcs endpoint and then display them iteratively in a ul)
    if (pageState === "parts") {
        return (
            <>
                <button onClick={() => setPageState("pcs")}>View PCs</button>
                <ul>
                    <li>CPUs</li>
                    <li>GPUs</li>
                    <li>RAM</li>
                    <li>Storage</li>
                    <li>PSU</li>
                    <li>Case</li>
                </ul>
            </>
        );
    }



    return (
        <>




            <p> Admin page </p>
        </>
    );
}