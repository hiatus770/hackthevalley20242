"use client";
import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Typography } from '@mui/material';
import Resizer from "react-image-file-resizer";


// Item is the type of component, either cpu, gpu, ram, storage, psu, 
const AddItemDialog = ({ open, handleClose, handleSubmit, item }) => {
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

    if (item == "cpu") {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle align="center" variant="h5" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: 'linear-gradient(0deg, #8FBCBB 40%, #5E81AC 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}>Upload Part</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'
                    }}>
                        Enter the details of the new chore.
                    </DialogContentText>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="model_name"
                        label="Model Name"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="socket_type"
                        label="Socket type"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="chipset"
                        label="Chipset"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="tdp"
                        label="Tdp type"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="ddr"
                        label="DDR Type"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="pcie"
                        label="PCIE"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="description"
                        label="Description"
                        variant="standard"
                    />

                    <Typography sx={{
                        mt: 2.5,
                        mb: 1,
                        fontSize: 16,
                        fontWeight: "bold"
                    }}
                    >
                        Upload A Photo of the Component
                    </Typography>
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
                    <Button onClick={() => handleSubmit(selectedFile, item)} color="primary" variant="contained">Add Chore</Button>
                </DialogActions>

            </Dialog>);
    }

    if (item == "gpu") {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle align="center" variant="h5" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: 'linear-gradient(0deg, #8FBCBB 40%, #5E81AC 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}>Upload Part</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'
                    }}>
                        Enter the details of the new chore.
                    </DialogContentText>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="model_name"
                        label="Model Name"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="pcie"
                        label="PCIE"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="psu"
                        label="PSU"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="cooling"
                        label="Cooling"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="monitor"
                        label="Monitor"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="description"
                        label="Description"
                        variant="standard"
                    />

                    <Typography sx={{
                        mt: 2.5,
                        mb: 1,
                        fontSize: 16,
                        fontWeight: "bold"
                    }}
                    >
                        Upload A Photo of the Component
                    </Typography>
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
                    <Button onClick={() => handleSubmit(selectedFile, item)} color="primary" variant="contained">Add Chore</Button>
                </DialogActions>

            </Dialog>);
    }


    if (item == "harddrive") {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle align="center" variant="h5" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: 'linear-gradient(0deg, #8FBCBB 40%, #5E81AC 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}>Upload Part</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'
                    }}>
                        Enter the details of the new chore.
                    </DialogContentText>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="model_name"
                        label="Model Name"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="hd_interface"
                        label="Hard drive interface"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="form_factor"
                        label="Form factor"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="cooling"
                        label="Cooling"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="description"
                        label="Description"
                        variant="standard"
                    />

                    <Typography sx={{
                        mt: 2.5,
                        mb: 1,
                        fontSize: 16,
                        fontWeight: "bold"
                    }}
                    >
                        Upload A Photo of the Component
                    </Typography>
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
                    <Button onClick={() => handleSubmit(selectedFile, item)} color="primary" variant="contained">Add Chore</Button>
                </DialogActions>

            </Dialog>);
    }


    if (item == "ram") {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle align="center" variant="h5" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: 'linear-gradient(0deg, #8FBCBB 40%, #5E81AC 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}>Upload Part</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'
                    }}>
                        Enter the details of the new chore.
                    </DialogContentText>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="model_name"
                        label="Model Name"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="speed"
                        label="Speed"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="capacity"
                        label="Capacity"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="num_channels"
                        label="Number of channels"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="ddr"
                        label="DDR type"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="description"
                        label="Description"
                        variant="standard"
                    />

                    <Typography sx={{
                        mt: 2.5,
                        mb: 1,
                        fontSize: 16,
                        fontWeight: "bold"
                    }}
                    >
                        Upload A Photo of the Component
                    </Typography>
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
                    <Button onClick={() => handleSubmit(selectedFile, item)} color="primary" variant="contained">Add Chore</Button>
                </DialogActions>

            </Dialog>);
    }

    if (item == "psu") {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle align="center" variant="h5" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: 'linear-gradient(0deg, #8FBCBB 40%, #5E81AC 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}>Upload Part</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'
                    }}>
                        Enter the details of the new chore.
                    </DialogContentText>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="model_name"
                        label="Model Name"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="wattage"
                        label="Wattage"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="efficiency"
                        label="Efficiency"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="power_connect"
                        label="Power connection"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="form_factor"
                        label="Form factor"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="description"
                        label="Description"
                        variant="standard"
                    />

                    <Typography sx={{
                        mt: 2.5,
                        mb: 1,
                        fontSize: 16,
                        fontWeight: "bold"
                    }}
                    >
                        Upload A Photo of the Component
                    </Typography>
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
                    <Button onClick={() => handleSubmit(selectedFile, item)} color="primary" variant="contained">Add Chore</Button>
                </DialogActions>

            </Dialog>);
    }

    if (item == "cooling") {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle align="center" variant="h5" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: 'linear-gradient(0deg, #8FBCBB 40%, #5E81AC 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}>Upload Part</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'
                    }}>
                        Enter the details of the new chore.
                    </DialogContentText>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="model_name"
                        label="Model Name"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="socket_type"
                        label="Socket type"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="fan_size"
                        label="Fan size"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="description"
                        label="Description"
                        variant="standard"
                    />

                    <Typography sx={{
                        mt: 2.5,
                        mb: 1,
                        fontSize: 16,
                        fontWeight: "bold"
                    }}
                    >
                        Upload A Photo of the Component
                    </Typography>
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
                    <Button onClick={() => handleSubmit(selectedFile, item)} color="primary" variant="contained">Add Chore</Button>
                </DialogActions>

            </Dialog>);
    }

    if (item == "pccase") {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle align="center" variant="h5" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: 'linear-gradient(0deg, #8FBCBB 40%, #5E81AC 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}>Upload Part</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'
                    }}>
                        Enter the details of the new chore.
                    </DialogContentText>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="model_name"
                        label="Model Name"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="form_factor"
                        label="Form factor"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="description"
                        label="Description"
                        variant="standard"
                    />

                    <Typography sx={{
                        mt: 2.5,
                        mb: 1,
                        fontSize: 16,
                        fontWeight: "bold"
                    }}>
                        Upload A Photo of the Component
                    </Typography>
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
                    <Button onClick={() => handleSubmit(selectedFile, item)} color="primary" variant="contained">Add Chore</Button>
                </DialogActions>

            </Dialog>);
    }

    if (item == "motherboard") {
        return (
            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle align="center" variant="h5" sx={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    background: 'linear-gradient(0deg, #8FBCBB 40%, #5E81AC 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                }}>Upload Part</DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'
                    }}>
                        Enter the details of the new chore.
                    </DialogContentText>
                    <TextField
                        fullWidth
                        margin="dense"
                        id="model_name"
                        label="Model Name"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="socket_type"
                        label="Socket type"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="chipset"
                        label="Chipset"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="ddr"
                        label="DDR Type"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="pcie"
                        label="PCIE Type"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="power_connect"
                        label="Power Connect"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="description"
                        label="Description"
                        variant="standard"
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        id="form_factor"
                        label="Form factor"
                        variant="standard"
                    />

                    <Typography sx={{
                        mt: 2.5,
                        mb: 1,
                        fontSize: 16,
                        fontWeight: "bold"
                    }}
                    >
                        Upload A Photo of the Component
                    </Typography>
                    <input type="file" onChange={handleFileChange} />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} color="primary" variant="contained">Cancel</Button>
                    <Button onClick={() => handleSubmit(selectedFile, item)} color="primary" variant="contained">Add Chore</Button>
                </DialogActions>

            </Dialog>);
    }

    return (
        <Dialog open={open} onClose={handleClose} fullWidth>
            SIGMA
        </Dialog>
    );

}

export default AddItemDialog;