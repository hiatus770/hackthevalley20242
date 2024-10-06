"use client";
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Typography } from '@mui/material';
import Resizer from "react-image-file-resizer";


// Item is the type of component, either cpu, gpu, ram, storage, psu, 
const AddItemDialog = ({ open, handleClose, handleSubmit }) => {
    const [selectedFile, setSelectedFile] = React.useState(null);

    const resizeFile = (file) =>
        new Promise((resolve) => {
            Resizer.imageFileResizer(
                file,
                400,
                400,
                "JPEG",
                100,
                0,
                (uri) => {
                    resolve(uri);
                },
                "base64"
            );
        });

    const handleFileChange = async (e) => {
        const file = await resizeFile(e.target.files[0]);
        setSelectedFile(file);
    };


    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            <DialogTitle align="center" variant="h5" sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                background: 'linear-gradient(0deg, #0070f3 40%, #5E81AC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                fontSize: "50px"
            }}>Request PC</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'
                }}>
                    Enter the details of the new chore.
                </DialogContentText>
                <TextField
                    fullWidth
                    margin="dense"
                    id="reason"
                    label="Enter reason"
                    variant="standard"
                />
                <TextField
                    fullWidth
                    margin="dense"
                    id="specs"
                    label="Enter specs"
                    variant="standard"
                />
                <TextField
                    fullWidth
                    margin="dense"
                    id="budget"
                    label="Enter budget"
                    variant="standard"
                />

            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
                <Button onClick={() => handleSubmit()} color="primary" variant="contained">Make Request</Button>
            </DialogActions>

        </Dialog>);

}

export default AddItemDialog;