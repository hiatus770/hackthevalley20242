'use client';
import { FormEvent, useState } from "react";
import { redirect, useRouter } from 'next/navigation'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";


export default function Form() {

    const [selectedRole, setSelectedRole] = useState('parent');

    const router = useRouter();

    const handleRoleChange = (event: SelectChangeEvent<String>) => {
        setSelectedRole(event.target.value as string);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        console.log("USERNAME: " + formData.get("email"));
        if (formData.get("email") === '' || formData.get("password") === '') {
            router.push("/error/EmailOrPasswordCannotBeEmpty")
            console.log("ERROR FOUND")
            return;
        }

        const response = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({
                email: formData.get("email"),
                password: formData.get("password"),
                name: formData.get("name"),
                phone: formData.get("phone"),
                address: formData.get("address"),
                type: "default",
            })
        });
        router.push("/login")
    }

    const defaultTheme = createTheme();

    return (
        <div style={{ backgroundColor: "#d4d4d4"}}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ width: "50vh", height: "70vh"}}>
                    <h1 style={{ textAlign: 'center', color: "black", fontSize: "50px", marginBottom: "30px"}}>Sign Up for Bit by Bit</h1>

                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="email"
                        autoComplete="email"
                    />

                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="phone"
                        label="Phone number"
                        name="phone"
                        autoComplete="Phone number"
                    />

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        name="address"
                        autoComplete="name"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                        <Typography variant="body2" marginRight={1}><a style={{color: "black"}}>Have an account already?</a></Typography>
                        <Link href="/login" variant="body2">
                            Login
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );

}