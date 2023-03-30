import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useIsAuthenticated } from "@azure/msal-react";
import MicrosoftLogin from './MicrosoftLogin';
import MicrosoftLogout from './MicrosoftLogout';

export default function Appbar(){
    const isAuthenticated = useIsAuthenticated();

    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Scheduler
                    </Typography>

                    { isAuthenticated ? <MicrosoftLogout /> : <MicrosoftLogin /> }
                </Toolbar>
            </AppBar>
        </div>
    )
}