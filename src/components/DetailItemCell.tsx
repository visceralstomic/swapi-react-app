import { Grid } from "@mui/material";
import React from "react";

interface IDetailItemCellProps {
    feature: string;
    featureValue: string | number | undefined
}

const DetailItemCell: React.FC<IDetailItemCellProps> = ({feature, featureValue}) => {
    return (
        <>
            <Grid item xs={5}>
            {feature}: 
        </Grid>

        <Grid item xs={7}
                sx={{
                      textAlign: "left"
                 }}
        >
            {featureValue}
        </Grid>
        </>
    )
}


export default DetailItemCell;