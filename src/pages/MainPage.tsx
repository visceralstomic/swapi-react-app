import { Typography } from "@mui/material";
import React from "react";
import Main from "../components/Main";


const MainPage: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="main-page">
                <Typography 
                    className="main-title" 
                    variant="h1"
                    sx={{
                        fontWeight: 800
                    }}
                
                >
                    Star <br/>
                    Wars
                </Typography>
            </div>
        </div>
    )
}


export default MainPage;