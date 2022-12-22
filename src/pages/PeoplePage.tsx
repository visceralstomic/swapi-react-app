import React from "react";
import PeopleItem from "../components/PeopleItem";
import useEntityData from "../hooks/useEntityData";
import { fetchPeople } from "../redux/store/reducers/peopleReducer";
import { PeopleType } from "../types/peopleType";
import TemplateListPage from "./TemplateLIstPage";


const PeoplePage: React.FC = () => {
    const {data, count, loading, error, 
        page, search, changePage, changeSearch} = useEntityData(fetchPeople, state => state.people)
    

    return (
        <TemplateListPage
            title="People Page" 
            renderItems={(item: PeopleType) => <PeopleItem key={item.name} peopleItem={item} />}
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


export default PeoplePage;