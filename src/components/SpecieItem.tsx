import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SpecieType } from "../types/speciesTypes";
import getIdFromUrl from "../utils/getIdFromUrl";


interface SpecieItemProps {
    specie: SpecieType
} 

const SpecieItem: React.FC<SpecieItemProps> = ({specie}) => {
    return (
        <ListItemButton
            sx={{
                mt: "10px",
                borderRadius: "10px"
            }}
            component={Link} to={`/species/${getIdFromUrl(specie.url)}`}
        >
            <ListItemText 
                primary={specie.name} 
                secondary={`Classification: ${specie.classification} | Homeworld: ${specie.homeworld} `}
            />
        </ListItemButton>

    )
}

export default SpecieItem;