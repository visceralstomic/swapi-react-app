import React from "react";
import { useRoutes } from "react-router-dom";
import FilmDetailPage from "../pages/FIlmDetailPage";
import FilmsPage from "../pages/FilmsPage";
import MainPage from "../pages/MainPage";
import PeopleDetailPage from "../pages/PeopleDetailPage";
import PeoplePage from "../pages/PeoplePage";
import PlanetDetailPage from "../pages/PlanetDetailPage";
import PlanetPage from "../pages/PlanetPage";
import SpecieDetailPage from "../pages/SpecieDetailPage";
import SpeciesPage from "../pages/SpeciesPage";
import StarshipDetailPage from "../pages/StarshipDetailPage";
import StarshipsPage from "../pages/StarshipsPage";
import VehicleDetailPage from "../pages/VehicleDetailPage";
import VehiclesPage from "../pages/VehiclesPage";


export const MAIN_ROUTE = "MAIN_ROUTE";
export const PEOPLE_ROUTE = "PEOPLE_ROUTE";
export const PEOPLE_DETAIL_ROUTE = "PEOPLE_DETAIL_ROUTE";   

export const PLANET_ROUTE = "PLANET_ROUTE";
export const PLANET_DETAIL_ROUTE = "PLANET_DETAIL_ROUTE";

export const FILMS_ROUTE = "FILMS_ROUTE";
export const FILM_DETAIL_ROUTE = "FILM_DETAIL_ROUTE";

export const STARSHIPS_ROUTE = "STARSHIPS_ROUTE";
export const STARSHIP_DETAIL_ROUTE = "STARSHIP_DETAIL_ROUTE";

export const VEHICLES_ROUTE = "VEHICLES_ROUTE";
export const VEHICLE_DETAIL_ROUTE = "VEHICLE_DETAIL_ROUTE";


export const SPECIES_ROUTE = "SPECIES_ROUTE";
export const SPECIE_DETAIL_ROUTE = "SPECIE_DETAIL_ROUTE";


const routesList = [
    {
        id: MAIN_ROUTE,
        path: "/",
        element: <MainPage />
    },
    {
        id: PEOPLE_ROUTE,
        path: "/people",
        element: <PeoplePage />
    },
    {
        id: PEOPLE_DETAIL_ROUTE,
        path: "/people/:id",
        element: <PeopleDetailPage />
    },
    {
        id: PLANET_ROUTE,
        path: "/planets",
        element: <PlanetPage />
    },
    {
        id: PLANET_DETAIL_ROUTE,
        path: "/planets/:id",
        element: <PlanetDetailPage />
    },
    {
        id: FILMS_ROUTE,
        path: "/films",
        element: <FilmsPage />
    },
    {
        id: FILM_DETAIL_ROUTE,
        path: "/films/:id",
        element: <FilmDetailPage />
    },
    {
        id: STARSHIPS_ROUTE,
        path: "/starships",
        element: <StarshipsPage />
    },
    {
        id: STARSHIP_DETAIL_ROUTE,
        path: "/starships/:id",
        element: <StarshipDetailPage />
    },
    {
        id: VEHICLES_ROUTE,
        path: "/vehicles",
        element: <VehiclesPage />
    },
    {
        id: VEHICLE_DETAIL_ROUTE,
        path: "/vehicles/:id",
        element: <VehicleDetailPage />
    },
    {
        id: SPECIES_ROUTE,
        path: "/species",
        element: <SpeciesPage />
    },
    {
        id: SPECIE_DETAIL_ROUTE,
        path: "/species/:id",
        element: <SpecieDetailPage />
    }
]


export const getRoutPath = (routeID: string) => {
    const route = routesList.find(route => route.id === routeID);

    if (route) {
        const {element, ...rest} = route;

        return rest.path;
    }

    return null;
}

const AppRouter:React.FC = () => {
    
    const routes = useRoutes(routesList);
    
    return (
        <>
            {routes}
        </>
    )
}


export default AppRouter;