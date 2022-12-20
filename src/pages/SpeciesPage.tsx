import React from "react";
import SpecieItem from "../components/SpecieItem";
import useEntityData from "../hooks/useEntityData";
import { fetchSpecies } from "../redux/store/reducers/speciesReducer";
import { SpecieType } from "../types/speciesTypes";
import TemplateListPage from "./TemplateLIstPage";


const SpeciesPage = () => {
    const {data, error, loading, page, search, count,
     changePage, changeSearch} = useEntityData(fetchSpecies, state => state.species);
    
    return (
        <TemplateListPage 
            title="Species page"
            data={data}
            renderItems={(item: SpecieType) => <SpecieItem key={item.name} specie={item} />}
            count={count}
            limit={10}
            loading={loading}
            page={page}
            searchValue={search}
            error={error}
            changePage={changePage}
            changeSearch={changeSearch}
        />
    )
}


export default SpeciesPage;