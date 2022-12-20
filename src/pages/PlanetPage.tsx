import React from "react";
import PlanetItem from "../components/PlanetItem";
import useEntityData from "../hooks/useEntityData";
import { fetchPlanets } from "../redux/store/reducers/planetReducer";
import { PlanetType } from "../types/planetType";
import TemplateListPage from "./TemplateLIstPage";




const PlanetPage: React.FC = () => {
    const {data, count, loading, error, 
        page, search, changePage, changeSearch} = useEntityData(fetchPlanets, state => state.planets)
        
    return (
        <TemplateListPage
            title="Planet Page" 
            renderItems={(item: PlanetType) => <PlanetItem key={item.name} planet={item} />}
            data={data}
            searchValue={search}
            count={count}
            limit={10}
            page={page}
            loading={loading}
            error={error}
            changePage={changePage}
            changeSearch={changeSearch}
        />
    )
}

export default PlanetPage;