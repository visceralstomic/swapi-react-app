import React from "react";
import StarshipItem from "../components/StarshipItem";
import useEntityData from "../hooks/useEntityData";
import { fetchStarships } from "../redux/store/reducers/starshipReducer";
import { StarshipType } from "../types/starshipType";
import TemplateListPage from "./TemplateLIstPage";



const StarshipsPage = () => {
    const {data, loading, error, page, search, count,
        changePage, changeSearch} = useEntityData(fetchStarships, state => state.starships)
    return (
        <TemplateListPage 
            title="Starships page"
            data={data}
            renderItems={(item: StarshipType) => <StarshipItem key={item.name} starship={item} />}
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


export default StarshipsPage;