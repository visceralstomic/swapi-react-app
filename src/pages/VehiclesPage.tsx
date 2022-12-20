import React from "react";
import VehicleItem from "../components/VehicleItem";
import useEntityData from "../hooks/useEntityData";
import { fetchVehicles } from "../redux/store/reducers/vehiclesReducer";
import { VehicleType } from "../types/vehicleType";
import TemplateListPage from "./TemplateLIstPage";


const VehiclesPage = () => {
    const {data, error, loading, count, page, search,
        changePage, changeSearch} = useEntityData(fetchVehicles, state => state.vehicles);
    return (
        <TemplateListPage 
            title="Vehicles Page"
            data={data}
            renderItems={(item: VehicleType) => <VehicleItem key={item.name} vehicle={item} />}
            limit={10}
            page={page}
            searchValue={search}
            error={error}
            loading={loading}
            count={count}
            changePage={changePage}
            changeSearch={changeSearch}
        />
    )
}

export default VehiclesPage;