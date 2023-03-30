import React from "react";
import { Button } from "@mui/material";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


export default function MicrosoftLogin(){
    const { instance } = useMsal();
    const handleLogin = () => {
        instance.loginPopup(loginRequest).catch(e => {
            console.log(e);
        });
    }

    return(
        <div>
            <Button sx={{background: "darkgray", color: "white"}} onClick={handleLogin} endIcon={<LoginIcon />}>Login</Button>
        </div>
    )
}