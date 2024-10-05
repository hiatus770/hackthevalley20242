"use client";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import react from "react";
import { getServerSession } from "next-auth";

import {
    Button,
    CircularProgress,
} from "@mui/material";
import Image from "next/image";
import React from "react";


const customTheme = createTheme({
    palette: {
        primary: {
            main: '#1c3dc9', // Custom primary color
        },
        secondary: {
            main: '#030059', // Custom secondary color
        },
    },
    typography: {
        h1: {
            fontSize: '2rem',
            color: '#ff5722', // Custom color for h1
        },
        body1: {
            color: '#4caf50', // Custom color for body text
        },
    },
});


export default function Form() {
    const router = useRouter();
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [usernameMessage, setUsernameMessage] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [pendingLogin, setPendingLogin] = useState(false); // Add this line

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {


        e.preventDefault();

        console.log("SUBMITTING FORM");

        const fData = new FormData(e.currentTarget);

        const email = (fData.get("email")?.toString() || "").trim().toLowerCase();

        // Does not follow character restrictions
        if (!(/^[0-9a-zA-Z_.-]+$/.test(email))) {
            setUsernameError(true);
            setPasswordError(true);
            setUsernameMessage("Invalid characters provided");
        } else {
            const password = fData.get("password") || "";
            setPendingLogin(true);  // Start loading spinner
            setUsernameError(false);
            const response = await signIn("credentials", {
                email: fData.get("email"),
                password: password,
                redirect: false,
            });
            if (response?.error) {  // Failed login
                setPasswordError(true);
                setPasswordMessage("Incorrect password");
            }
            if (!response?.error) {
                router.push("/about");
                router.refresh();
            }
            setPendingLogin(false);  // Stop loading spinner
        }

    };

    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={customTheme}>
            <Typography component="h1" variant="h5" sx={{ color: 'white' }}>
                Login
            </Typography>

            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ height: "100%", transform: "translate(0px, -48px)" }}
            >


                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{
                        mt: 1,
                        width: "90%",
                    }}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Username"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={usernameError}
                        helperText={
                            usernameError ? usernameMessage : ""
                        }
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={passwordError}
                        helperText={
                            usernameError
                                ? ""
                                : passwordError
                                    ? passwordMessage
                                    : ""
                        }
                    />

                    {pendingLogin ? (
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                            disabled
                        >
                            <CircularProgress
                                size={24}
                                color="inherit"
                            />
                        </Button>
                    ) : (
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Login
                        </Button>
                    )}


                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" }}>
                        <Typography variant="body2" marginRight={1}>Do not have an account?</Typography>
                        <Link href="/register" variant="body2">
                            Sign up
                        </Link>
                    </div>

                </Box>
            </Box>
        </ThemeProvider>
    );
}