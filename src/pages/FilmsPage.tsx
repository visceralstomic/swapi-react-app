import React from "react";
import FilmItem from "../components/FilmItem";
import useEntityData from "../hooks/useEntityData";
import { fetchFilms } from "../redux/store/reducers/filmReducer";
import { FilmType } from "../types/filmType";
import TemplateListPage from "./TemplateLIstPage";


const FilmsPage = () => {
    const {data, error, loading, search, count, page,
        changePage, changeSearch} = useEntityData(fetchFilms, state => state.films);

    return (
        <TemplateListPage 
            title="Films Page"
            data={data}
            renderItems={(item: FilmType) => <FilmItem key={item.title} film={item} />}
            loading={loading}
            error={error}
            searchValue={search}
            count={count}
            page={page}
            changePage={changePage}
            changeSearch={changeSearch}
            limit={10}
        />
    )
}


export default FilmsPage;