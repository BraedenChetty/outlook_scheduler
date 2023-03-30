import React, {useState} from "react";
import { FormControl, Button, FilledInput, InputLabel, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";


export default function Login(){
    const [login, setLogin] = useState({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleLogin = () => {
        axios.post("http://localhost:8080/api/users/login", login).then(x => {
            console.log(x.data);
        })
    }

    return(
        <div className="login">
            <div className="wrapper">
                <h1>Welcome Back</h1>
                <br></br>
            
                <FormControl sx={{ m: 1, width: '25ch', background: "white" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-username">Email Address</InputLabel>
                    <FilledInput
                    type="email"
                    value={login.email}
                    onChange={(e) => setLogin({...login, email: e.target.value})}
                    />
                </FormControl>
                <br></br>

                <FormControl sx={{ m: 1, width: '25ch', background: "white" }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                    type={showPassword ? 'text' : 'password'}
                    value={login.password}
                    onChange={(e) => setLogin({...login, password: e.target.value})}
                    endAdornment={
                        <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                        </InputAdornment>
                    }
                    />
                </FormControl>
                <br></br>
                <br></br>

                <Button className="Button" sx={{background: "white", color: "black"}} onClick={handleLogin}>Login</Button>
            </div>
        </div>
    )
}