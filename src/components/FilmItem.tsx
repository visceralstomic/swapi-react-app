import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { FilmType } from "../types/filmType";
import getIdFromUrl from "../utils/getIdFromUrl";


interface FilmItemProp {
    film: FilmType;
}

const FilmItem: React.FC<FilmItemProp> = ({film}) => {
    const filmID = getIdFromUrl(film.url);

    return (

        <ListItemButton
            sx={{
                mt: "10px",
                borderRadius: "10px"
            }}
            component={Link} to={`/films/${filmID}`}
        >
            <ListItemText 
                primary={film.title} 
                secondary={`Director: ${film.director} | Year: ${film.release_date}`}
            />
        </ListItemButton>
    )
}

export default FilmItem;