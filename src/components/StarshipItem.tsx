import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { StarshipType } from "../types/starshipType";
import getIdFromUrl from "../utils/getIdFromUrl";


interface StarshipItemProps {
    starship: StarshipType;  
}

const StarshipItem: React.FC<StarshipItemProps> = ({starship}) => {
    return (
        <ListItemButton
            sx={{
                mt: "10px",
                borderRadius: "10px"
            }}
            component={Link} to={`/starships/${getIdFromUrl(starship.url)}`}
        >
            <ListItemText 
                primary={starship.name} 
                secondary={`Model: ${starship.model} | Class: ${starship.starship_class} `}
            />
        </ListItemButton>
    )
}


export default StarshipItem;

