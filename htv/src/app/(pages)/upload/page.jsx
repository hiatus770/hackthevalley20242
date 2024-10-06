"use client";
import React, { useState, useCallback } from 'react';
import { Button } from '@mui/material';
import AddItemDialog from './addItemDialog'; // Adjust the import path as necessary
import styles from "../../../styles/home.module.css"; 

export default function Admin() {
    const [open, setOpen] = useState(false);  // Is dialogue open
    const [item, setItem] = useState("cpu");  // Item type
    
    
    const convertImageToBase64 = (url) => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                const reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                }
                reader.readAsDataURL(xhr.response);
            };
            xhr.onerror = function () {
                reject(new Error('Failed to load image'));
            };
            xhr.open('GET', url);
            xhr.responseType = 'blob';
            xhr.send();
        });
    };

    const handleSubmit = (base64data, item) => {
        

        const user_name = "TEST"; 
        const address = "TEST";
        const contact = "TEST";


        const model_name = document.getElementById("model_name")?.value ?? null;
        const socket_type = document.getElementById("socket_type")?.value ?? null;
        const chipset = document.getElementById("chipset")?.value ?? null;
        const tdp = document.getElementById("tdp")?.value ?? null;
        const ddr = document.getElementById("ddr")?.value ?? null;
        const pcie = document.getElementById("pcie")?.value ?? null;
        const fan_size = document.getElementById("fan_size")?.value ?? null;
        const psu = document.getElementById("psu")?.value ?? null;
        const cooling = document.getElementById("cooling")?.value ?? null;
        const monitor = document.getElementById("monitor")?.value ?? null;
        const hd_interface = document.getElementById("hd_interface")?.value ?? null;
        const form_factor = document.getElementById("form_factor")?.value ?? null;
        const power_connect = document.getElementById("power_connect")?.value ?? null;
        const wattage = document.getElementById("wattage")?.value ?? null;
        const efficiency = document.getElementById("efficiency")?.value ?? null;
        const capacity = document.getElementById("capacity")?.value ?? null;
        const num_channels = document.getElementById("num_channels")?.value ?? null;
        const description = document.getElementById("description")?.value ?? null;
        const speed = document.getElementById("speed")?.value ?? null;
        
        console.log("Model Name: ", model_name);

        const uploadItem = (image) => {
            if (item === "cpu") {
                fetch("/api/addCpu", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_name: user_name,
                        address: address,
                        contact: contact,
                        model_name: model_name,
                        socket_type: socket_type,
                        chipset: chipset,
                        tdp: tdp,
                        ddr: ddr,
                        pcie: pcie, 
                        description: description,
                        image: image,
                        rest: " "
                    }),
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("Data: ", data);
                }).catch((error) => {
                    console.error("Error:", error);
                }).finally(() => {
                    handleClose();
                });
            }
            else if (item === "gpu") {
                fetch("/api/addGpu", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_name: user_name,
                        address: address,
                        contact: contact,
                        model_name: model_name,
                        pcie: pcie,
                        psu: psu,
                        cooling, cooling,
                        monitor: monitor,
                        description: description,
                        image: image,
                        rest: " "
                    }),
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("Data: ", data);
                }).catch((error) => {
                    console.error("Error:", error);
                }).finally(() => {
                    handleClose();
                });
            }
            else if (item === "cooling") {
                fetch("/api/addCooling", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_name: user_name,
                        address: address,
                        contact: contact,
                        model_name: model_name,
                        socket_type: socket_type,
                        fan_size: fan_size,
                        description: description,
                        image: image,
                        rest: " "
                    }),
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("Data: ", data);
                }).catch((error) => {
                    console.error("Error:", error);
                }).finally(() => {
                    handleClose();
                });
            }
            else if (item === "harddrive") {
                fetch("/api/addHarddrive", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_name: user_name,
                        address: address,
                        contact: contact,
                        model_name: model_name,
                        hd_interface: hd_interface,
                        form_factor: form_factor,
                        cooling: cooling,
                        description: description,
                        image: image,
                        rest: " "
                    }),
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("Data: ", data);
                }).catch((error) => {
                    console.error("Error:", error);
                }).finally(() => {
                    handleClose();
                });
            }
            else if (item === "ram") {
                fetch("/api/addRam", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_name: user_name,
                        address: address,
                        contact: contact,
                        model_name: model_name,
                        speed: speed,
                        capacity: capacity,
                        num_channels: num_channels,
                        ddr: ddr,
                        description: description,
                        image: image,
                        rest: " "
                    }),
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("Data: ", data);
                }).catch((error) => {
                    console.error("Error:", error);
                }).finally(() => {
                    handleClose();
                });
            }
            else if (item === "psu") {
                fetch("/api/addPsu", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_name: user_name,
                        address: address,
                        contact: contact,
                        model_name: model_name,
                        wattage: wattage,
                        efficiency: efficiency,
                        power_connect: power_connect,
                        form_factor: form_factor,
                        description: description,
                        image: image,
                        rest: " "
                    }),
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("Data: ", data);
                }).catch((error) => {
                    console.error("Error:", error);
                }).finally(() => {
                    handleClose();
                });
            }
            else if (item === "pccase") {
                fetch("/api/addPccase", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        user_name: user_name,
                        address: address,
                        contact: contact,
                        model_name: model_name,
                        form_factor: form_factor,
                        description: description,
                        image: image,
                        rest: " "
                    }),
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("Data: ", data);
                }).catch((error) => {
                    console.error("Error:", error);
                }).finally(() => {
                    handleClose();
                });
            }
            else if (item === "motherboard") {
                fetch("/api/addMotherboard", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: 
                    JSON.stringify({
                        user_name: user_name,
                        address: address,
                        contact: contact,
                        model_name: model_name,
                        socket_type: socket_type,
                        chipset: chipset,
                        ddr: ddr,
                        pcie: pcie, 
                        power_connect: power_connect,
                        form_factor: form_factor,
                        description: description,
                        rest: " ",
                        image: image
                    }),
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log("Data: ", data);
                }).catch((error) => {
                    console.error("Error:", error);
                }).finally(() => {
                    handleClose();
                }); 
            }
            else {
                console.error("Invalid item type: ", item);
                return;
            }

        };

        if (base64data) {
            uploadItem(base64data);
        } else {
            convertImageToBase64("/logo.png").then((defaultImage) => {
                console.log("Default Image: ", defaultImage);
                uploadItem(defaultImage);
            }).catch((error) => {
                console.error('Error converting default image to base64:', error);
            });
        }
    };

    const openUpload = useCallback((item) => {  // Open an add chore dialog
        console.log("Opening upload for: ", item);
        setItem(item);
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <>
            <h1 className={styles.sectitle}> Upload Components! </h1>
            <AddItemDialog open={open} handleClose={handleClose} handleSubmit={handleSubmit} item={item} />
            <div className={styles.buttons}>
                <Button onClick={() => openUpload("cpu")}> Upload CPU </Button>
                <Button onClick={() => openUpload("gpu")}> Upload GPU </Button>
                <Button onClick={() => openUpload("cooling")}> Upload Cooling part </Button>
                <Button onClick={() => openUpload("harddrive")}> Upload Harddrive</Button>
                <Button onClick={() => openUpload("ram")}> Upload Ram </Button>
                <Button onClick={() => openUpload("psu")}> Upload Power Supply </Button>
                <Button onClick={() => openUpload("pccase")}> Upload Case </Button>
                <Button onClick={() => openUpload("motherboard")}> Upload Motherboard </Button>
            </div>
        </>
    );
}