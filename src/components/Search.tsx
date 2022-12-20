import React from "react";
import TextField from "@mui/material/TextField";


interface SearchProps {
    searchValue: string,
    changeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}



const Search: React.FC<SearchProps> = ({searchValue, changeSearch}) => {

    return (
            <TextField
                fullWidth 
                type="search" 
                value={searchValue} 
                onChange={changeSearch}
                label="Search..."
                variant="filled"
                color="primary"  
                sx={{
                    mb: "20px"
                }}   
            />
    )
}


export default Search;