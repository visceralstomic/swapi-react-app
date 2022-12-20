import { RootState } from "../redux/store/store";
import { AllStateTypes, fetchActionType, fetchPaylodType, FnReturnType } from "../types/common";
import { FilmStateType } from "../types/filmType";
import { PeopleState } from "../types/peopleType";
import { PlanetState } from "../types/planetType";
import { SpeciesStateType } from "../types/speciesTypes";
import { StarshipStateType } from "../types/starshipType";
import { VehicleStateType } from "../types/vehicleType";
import { useAppDispatch, useAppSelector } from "./reducerHooks";


type stateCommonType = (state: RootState) => AllStateTypes;
type stateSelectPeopleType = (state: RootState) => PeopleState;
type stateSelectPlanetType = (state: RootState) => PlanetState;
type stateSelectFilmType = (state: RootState) => FilmStateType;
type stateSelectStarshipType = (state: RootState) => StarshipStateType;
type stateSelectVehicleType = (state: RootState) => VehicleStateType;
type stateSelectSpecieType = (state: RootState) => SpeciesStateType;

type PeopleReturnType = FnReturnType & PeopleState;
type PlanetReturnType = FnReturnType & PlanetState;
type FilmReturnType = FnReturnType & FilmStateType;
type StarshipReturnType = FnReturnType & StarshipStateType;
type VehicleReturnType = FnReturnType & VehicleStateType;
type SpeciesReturnType = FnReturnType & SpeciesStateType;

function useEntityData (fetchAction: fetchActionType, stateSelect: stateSelectPeopleType): PeopleReturnType;
function useEntityData (fetchAction: fetchActionType, stateSelect: stateSelectPlanetType): PlanetReturnType;
function useEntityData (fetchAction: fetchActionType, stateSelect: stateSelectFilmType): FilmReturnType;
function useEntityData (fetchAction: fetchActionType, stateSelect: stateSelectStarshipType): StarshipReturnType;
function useEntityData (fetchAction: fetchActionType, stateSelect: stateSelectVehicleType): VehicleReturnType;
function useEntityData (fetchAction: fetchActionType, stateSelect: stateSelectSpecieType): SpeciesReturnType;


function useEntityData (fetchAction: fetchActionType, stateSelect: stateCommonType) {
    const {data, count, loading, error, page, search} = useAppSelector(stateSelect);
    const dispatch = useAppDispatch();


    const changePage = (page:number) => {
        dispatch(fetchAction({search, page}))
    }

    const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(fetchAction({
            page: 1,
            search: event.target.value
        }))
    }

    return {data, count, loading, error, page, search, changeSearch, changePage}
}


export default useEntityData;