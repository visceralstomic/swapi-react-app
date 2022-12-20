import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { PeopleType } from "../types/peopleType";
import getIdFromUrl from "../utils/getIdFromUrl";


interface PeopleItemProps {
    peopleItem: PeopleType
}

const PeopleItem: React.FC<PeopleItemProps> = ({peopleItem}) => {
    const {url} = peopleItem;
    const id = getIdFromUrl(url);
    return (
        <ListItemButton
            sx={{
                mt: "10px",
                borderRadius: "10px"
            }}
            component={Link} to={`/people/${id}`}
            color="secondary"
        >
            

            <ListItemText 
                primary={peopleItem.name} 
                secondary={`Gender: ${peopleItem.gender} | Birth year: ${peopleItem.birth_year}`}
            />
        </ListItemButton >
    )
}


export default PeopleItem;