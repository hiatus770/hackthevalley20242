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
    const [harddriveParts, setHarddriveParts] = React.useState([]);
    const [motherboardParts, setMotherboardParts] = React.useState([]);
    const [pccaseParts, setPccaseParts] = React.useState([]);
    const [psuParts, setPsuParts] = React.useState([]);
    const [ramParts, setRamParts] = React.useState([]);

    // Potential PCS received from /getPcs endpoint 
    const [pcs, setPcs] = React.useState([]);

    React.useEffect(() => {
        async function getParts() {
            const cooling = await fetch("/api/getItem",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        item: "cooling"
                    })
                });

            const cpu = await fetch("/api/getItem",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        item: "cpu"
                    })
                });

            const gpu = await fetch("/api/getItem",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        item: "gpu"
                    })
                });

            const ram = await fetch("/api/getItem",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        item: "ram"
                    })
                });

            const harddrive = await fetch("/api/getItem",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        item: "harddrive"
                    })
                });

            const psu = await fetch("/api/getItem",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        item: "psu"
                    })
                });

            const motherboard = await fetch("/api/getItem",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        item: "motherboard"
                    })
                });

            const pccase = await fetch("/api/getItem",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        item: "pccase"
                    })
                });

            const pcs = await fetch("/api/getPC",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });


            const coolingPartsJson = await cooling.json();
            const cpuPartsJson = await cpu.json();
            const gpuPartsJson = await gpu.json();
            const ramPartsJson = await ram.json();
            const harddrivePartsJson = await harddrive.json();
            const psuPartsJson = await psu.json();
            const motherboardPartsJson = await motherboard.json();
            const pccasePartsJson = await pccase.json();
            const pcsJson = await pcs.json();

            console.log("CPU PARTS: ", JSON.stringify(cpuPartsJson));

            setCoolingParts(coolingPartsJson);
            setCpuParts(cpuPartsJson);
            setGpuParts(gpuPartsJson);
            setRamParts(ramPartsJson);
            setHarddriveParts(harddrivePartsJson);
            setPsuParts(psuPartsJson);
            setMotherboardParts(motherboardPartsJson);
            setPccaseParts(pccasePartsJson);
            setPcs(pcsJson);
        }
        getParts();
    }, []);

    // Create a generate li function that takes in a element list and returns a list of li elements, each element has different properties tho so just display each one is the same style entry
    interface coolingPart {
        user_name: string;
        address: string;
        contact: string;
        model_name: string;
        socket_type: string;
        fan_size: string;
        description: string;
        image: string;
        rest: string;
    }

    // Make a function that takes in a list of parts and returns a list of li elements
    function generateCoolingParts(coolingParts: coolingPart[]) {
        return coolingParts.map((part) => {
            return (
                <li>
                    <h1>{part.model_name}</h1>
                    <p>{part.description}</p>
                    <p>{part.socket_type}</p>
                    <p>{part.fan_size}</p>
                    <img src={part.image} alt="image" />
                </li>
            );
        });
    }

    // Image is base64 encoded string 
    interface cpuPart {
        user_name: string;
        address: string;
        contact: string;
        model_name: string;
        socket_type: string;
        chipset: string;
        tdp: string;
        ddr: string;
        pcie: string;
        description: string;
        image: string;
        rest: string;
    }

    // Take in a json object and return a list of li elements
    function generateCpuParts(cpuJson: any) {
        // Convert the json object into a javascript array
        const cpuParts = cpuJson.data;
        console.log("CPU PARTS: ", typeof (cpuParts));
        if (cpuParts === undefined) {
            return <p> No CPUs found </p>
        }

        return cpuParts.map((part: cpuPart) => (
            <li key={part.model_name + part.address + part.tdp}>
                <h3>{part.model_name}</h3>
                <p>Socket Type: {part.socket_type}</p>
                <p>Chipset: {part.chipset}</p>
                <p>TDP: {part.tdp}</p>
                <p>DDR: {part.ddr}</p>
                <p>PCIe: {part.pcie}</p>
                <p>Contact: {part.contact}</p>
                <p>Address: {part.address}</p>
                <img src={part.image} alt="image" />
            </li>
        ));
    }


    interface gpuPart {
        user_name: string;
        address: string;
        contact: string;
        model_name: string;
        pcie: string;
        psu: string;
        cooling: string;
        monitor: string;
        description: string;
        image: string;
        rest: string;
    }
    function generateGpuParts(gpuJson: any) {
        const gpuParts = gpuJson.data;
        console.log("GPU PARTS: ", typeof (gpuParts));
        if (gpuParts === undefined) {
            return <p> No GPUs found </p>
        }

        return gpuParts.map((part: gpuPart) => (
            <li key={part.model_name + part.address + part.psu}>
                <h3>{part.model_name}</h3>
                <p>PCIe: {part.pcie}</p>
                <p>PSU: {part.psu}</p>
                <p>Cooling: {part.cooling}</p>
                <p>Monitor: {part.monitor}</p>
                <p>Contact: {part.contact}</p>
                <p>Address: {part.address}</p>
                <img src={part.image} alt="image" />
            </li>
        ));
    }


    interface harddrivePart {
        user_name: string;
        address: string;
        contact: string;
        model_name: string;
        hd_interface: string;
        form_factor: string;
        cooling: string;
        description: string;
        image: string;
        rest: string;
    }
    function generateHarddriveParts(harddriveJson: any) {
        const harddriveParts = harddriveJson.data;
        console.log("HARDDRIVE PARTS: ", typeof (harddriveParts));
        if (harddriveParts === undefined) {
            return <p> No Harddrives found </p>
        }

        return harddriveParts.map((part: harddrivePart) => (
            <li key={part.model_name + part.address + part.hd_interface}>
                <h3>{part.model_name}</h3>
                <p>HD Interface: {part.hd_interface}</p>
                <p>Form Factor: {part.form_factor}</p>
                <p>Cooling: {part.cooling}</p>
                <p>Contact: {part.contact}</p>
                <p>Address: {part.address}</p>
                <img src={part.image} alt="image" />
            </li>
        ));
    }

    interface motherboardPart {
        user_name: string;
        address: string;
        contact: string;
        model_name: string;
        socket_type: string;
        chipset: string;
        ddr: string;
        pcie: string;
        form_factor: string;
        power_connect: string;
        description: string;
        image: string;
        rest: string;
    }
    function generateMotherboardParts(motherboardJson: any) {
        const motherboardParts = motherboardJson.data;
        console.log("MOTHERBOARD PARTS: ", typeof (motherboardParts));
        if (motherboardParts === undefined) {
            return <p> No Motherboards found </p>
        }

        return motherboardParts.map((part: motherboardPart) => (
            <li key={part.model_name + part.address + part.power_connect}>
                <h3>{part.model_name}</h3>
                <p>Socket Type: {part.socket_type}</p>
                <p>Chipset: {part.chipset}</p>
                <p>DDR: {part.ddr}</p>
                <p>PCIe: {part.pcie}</p>
                <p>Form Factor: {part.form_factor}</p>
                <p>Power Connect: {part.power_connect}</p>
                <p>Contact: {part.contact}</p>
                <p>Address: {part.address}</p>
                <img src={part.image} alt="image" />
            </li>
        ));
    }

    interface pccasePart {
        user_name: string;
        address: string;
        contact: string;
        model_name: string;
        form_factor: string;
        description: string;
        image: string;
        rest: string;
    }
    function generatePccaseParts(pccaseJson: any) {
        const pccaseParts = pccaseJson.data;
        console.log("PCCASE PARTS: ", typeof (pccaseParts));
        if (pccaseParts === undefined) {
            return <p> No Cases found </p>
        }

        return pccaseParts.map((part: pccasePart) => (
            <li key={part.model_name + part.address}>
                <h3>{part.model_name}</h3>
                <p>Form Factor: {part.form_factor}</p>
                <p>Contact: {part.contact}</p>
                <p>Address: {part.address}</p>
                <img src={part.image} alt="image" />
            </li>
        ));
    }

    interface psuPart {
        user_name: string;
        address: string;
        contact: string;
        model_name: string;
        wattage: string;
        efficiency: string;
        power_connect: string;
        form_factor: string;
        description: string;
        image: string;
        rest: string;
    }
    function generatePsuParts(psuJson: any) {
        const psuParts = psuJson.data;
        console.log("PSU PARTS: ", typeof (psuParts));
        if (psuParts === undefined) {
            return <p> No PSUs found </p>
        }

        return psuParts.map((part: psuPart) => (
            <li key={part.model_name + part.address + part.wattage}>
                <h3>{part.model_name}</h3>
                <p>Wattage: {part.wattage}</p>
                <p>Efficiency: {part.efficiency}</p>
                <p>Power Connect: {part.power_connect}</p>
                <p>Form Factor: {part.form_factor}</p>
                <p>Contact: {part.contact}</p>
                <p>Address: {part.address}</p>
                <img src={part.image} alt="image" />
            </li>
        ));
    }

    interface ramPart {
        user_name: string;
        address: string;
        contact: string;
        model_name: string;
        speed: string;
        ddr: string;
        capacity: string;
        num_channels: string;
        description: string;
        image: string;
        rest: string;
    }
    function generateRamParts(ramJson: any) {
        const ramParts = ramJson.data;
        console.log("RAM PARTS: ", typeof (ramParts));
        if (ramParts === undefined) {
            return <p> No RAM found </p>
        }

        return ramParts.map((part: ramPart) => (
            <li key={part.model_name + part.address + part.speed}>
                <h3>{part.model_name}</h3>
                <p>Speed: {part.speed}</p>
                <p>DDR: {part.ddr}</p>
                <p>Capacity: {part.capacity}</p>
                <p>Num Channels: {part.num_channels}</p>
                <p>Contact: {part.contact}</p>
                <p>Address: {part.address}</p>
                <img src={part.image} alt="image" />
            </li>
        ));
    }

    // If on parts page return parts display (use the /getCpus, /getGpus, etc. endpoints and then display them iteratively in a ul) 
    // If on pcs page return pcs display (use the /getPcs endpoint and then display them iteratively in a ul)
    if (pageState === "parts") {
        return (
            <div style={{backgroundColor: "#d4d4d4", color:"black"}}>
                <button onClick={() => setPageState("pcs")}><h1 style={{fontSize:"50px", marginLeft:"50vh"}}>View PCS</h1></button>
                <ul className="pc-items">
                    <li>CPUs</li>
                    <ul>
                        {generateCpuParts(cpuParts)}
                    </ul>
                    <li>GPUs</li>
                    <ul>
                        {generateGpuParts(gpuParts)}
                    </ul>
                    <li>RAM</li>
                    <ul>
                        {generateRamParts(ramParts)}
                    </ul>
                    <li>Storage</li>
                    <ul>
                        {generateHarddriveParts(harddriveParts)}
                    </ul>
                    <li>PSU</li>
                    <ul>
                        {generatePsuParts(psuParts)}
                    </ul>
                    <li>Case</li>
                    <ul>
                        {generatePccaseParts(pccaseParts)}
                    </ul>
                    <li>Motherboard </li>
                    <ul>
                        {generateMotherboardParts(motherboardParts)}
                    </ul> 
                </ul>
            </div>
        );
    }

    // Find pc logic
    function generatePcs(pcs: any) {

        // display the json
        console.log("PCS: ", JSON.stringify(pcs));

        if (pcs === undefined) {
            return <p> No PCs found </p>
        }

        const pcArray = pcs.data; // This is a 2d array of pcs, each pc has an array of its parts 

        if (pcArray === undefined) {
            return <p> No PCs found </p>
        }

        pcArray.forEach((pc: any) => {
            if (pc === undefined) {
                return <p> No PCs found </p>
            }
            console.log("PC ITEM: ", JSON.stringify(pc));
            console.log("PC ITEM: ", pc[0].model_name);
        });

        // Put a buttom to build a pc 

        return pcArray.map((pc: any) => {
            return (
                <div style={{backgroundColor: "d3d3d3"}}>   
                    <li className="pc-items">
                        <h1>{pc[0].model_name}</h1>
                        <ul>
                            <li>{pc[1].model_name}</li>
                            <li>{pc[2].model_name}</li>
                            <li>{pc[3].model_name}</li>
                            <li>{pc[4].model_name}</li>
                            <li>{pc[5].model_name}</li>
                            <li>{pc[6].model_name}</li>
                            <li>{pc[7].model_name}</li>
                        </ul>

                        <button onClick={() => {

                            const element = document.createElement("a");
    
                            // Format the pc object into a string
                            let pcString = "";
                            pc.forEach((part: any) => {
                                pcString += JSON.stringify(part, null, 2) + "\n";
                            });

                            // remove all quotes
                            pcString = pcString.replace(/"/g, "");
                            // remove all commas
                            pcString = pcString.replace(/,/g, "");
                            // Remove all curly braces
                            pcString = pcString.replace(/{/g, "");
                            pcString = pcString.replace(/}/g, "");

                            // Create a file and download it
                            const file = new Blob([pcString], { type: 'text/plain' });

                            element.href = URL.createObjectURL(file);
                            element.download = "pcInformation.txt";
                            document.body.appendChild(element); // Required for this to work in FireFox
                            element.click();
                            document.body.removeChild(element);


                            console.log("PC: ", pc);
                            fetch("/api/deleteItemById", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    id: pc[0].id,
                                    item: "cpu"
                                })
                            });
                            fetch("/api/deleteItemById", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    id: pc[1].id,
                                    item: "gpu"
                                })
                            });
                            // mother
                            fetch("/api/deleteItemById", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    id: pc[2].id,
                                    item: "motherboard"
                                })
                            });
                            // ram
                            fetch("/api/deleteItemById", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    id: pc[3].id,
                                    item: "ram"
                                })
                            });
                            // ram
                            fetch("/api/deleteItemById", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    id: pc[4].id,
                                    item: "pccase"
                                })
                            });
                            // pccase
                            fetch("/api/deleteItemById", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    id: pc[5].id,
                                    item: "cooling"
                                })
                            });
                            // cooling
                            fetch("/api/deleteItemById", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    id: pc[6].id,
                                    item: "psu"
                                })
                            });
                            // psu
                            fetch("/api/deleteItemById", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    id: pc[7].id,
                                    item: "harddrive"
                                })
                            });
                        }}>Build PC</button>
                    </li>
                </div>
            );
        });
    }

    if (pageState === "pcs") {
        return (
            <div style={{backgroundColor: "#d4d4d4", color: "black"}}>
                <button onClick={() => setPageState("parts")}><h1 style={{fontSize:"50px", marginLeft:"50vh"}}>View Parts</h1></button>
                <ul>
                    <li>PCs</li>
                    <ul>
                        {generatePcs(pcs)}
                    </ul>
                </ul>
            </div>
        );
    }

    return (
        <>
            <p> Admin page </p>
        </>
    );
}