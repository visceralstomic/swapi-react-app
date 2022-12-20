import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { VehicleType } from "../types/vehicleType";
import getIdFromUrl from "../utils/getIdFromUrl";


interface VehicleItemProps {
    vehicle: VehicleType
}

const VehicleItem: React.FC<VehicleItemProps> = ({vehicle}) => {
    return (
        <ListItemButton
            sx={{
                mt: "10px",
                borderRadius: "10px"
            }}
            component={Link} to={`/vehicles/${getIdFromUrl(vehicle.url)}`}
        >
            <ListItemText 
                primary={vehicle.name} 
                secondary={`Model: ${vehicle.model} | Class: ${vehicle.vehicle_class} `}
            />
        </ListItemButton>
    )
}


export default VehicleItem;