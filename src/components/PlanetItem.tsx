import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PlanetType } from "../types/planetType";
import getIdFromUrl from "../utils/getIdFromUrl";

interface PlanetItemProps {
    planet: PlanetType
}

const PlanetItem: React.FC<PlanetItemProps> = ({planet}) => {
    const {url} = planet;

    const id = getIdFromUrl(url);


    return (
        <ListItemButton
            sx={{
                mt: "10px",
                borderRadius: "10px"
            }}
            component={Link} to={`/planets/${id}`}
        >
            <ListItemText 
                primary={planet.name} 
                secondary={`Climate: ${planet.climate} | Diameter: ${planet.diameter} | Gravity: ${planet.gravity} `}
            />
        </ListItemButton>
    )
}


export default PlanetItem;

