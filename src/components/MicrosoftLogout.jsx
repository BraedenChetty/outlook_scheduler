import React from "react";
import { Button } from "@mui/material";
import { useMsal } from "@azure/msal-react";
import LogoutIcon from '@mui/icons-material/Logout';

export default function MicrosoftLogout(){
    const { instance } = useMsal();
    const handleLogout = () => {
        instance.logoutPopup({
            postLogoutRedirectUri: "/",
            mainWindowRedirectUri: "/"
        });
    }

    return(
        <div>
            <Button sx={{background: "darkgray", color: "white"}} onClick={handleLogout} endIcon={<LogoutIcon />}>Logout</Button>
        </div>
    )
}