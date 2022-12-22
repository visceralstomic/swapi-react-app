import { FilmType } from "../types/filmType";
import { PeopleType } from "../types/peopleType";
import { PlanetType } from "../types/planetType";
import { SpecieType } from "../types/speciesTypes";
import { StarshipType } from "../types/starshipType";
import { VehicleType } from "../types/vehicleType";



export const peopleData: PeopleType[] = [
    {
        name: "luke skywalker", films: ['film/1', 'film/2'], gender: "male",
        height: 180, hair_color: 'blonde', homeworld: "url/1", birth_year: 'year',
        skin_color: 'white', species: ['human/1'], starships: ['url/1', 'url/2'], 
        url: 'url/1', vehicles: ['url/2', 'url/2']
    },
    {
        name: "Kenobi", films: ['film', 'film1'], gender: "male",
        height: 180, hair_color: 'blonde', homeworld: "url", birth_year: 'year',
        skin_color: 'white', species: ['human'], starships: ['url', 'url'], 
        url: 'url/2', vehicles: ['url', 'url']
    }
] 


export const planetTestData: PlanetType[] = [
    {
        name: "Dagoba", diameter: "string", rotation_period: "string",  orbital_period: "string",
        gravity: "string",  population: "string", climate: "string",  terrain: "string",
        surface_water: "string", residents: ['url', 'url'], films: ['url', 'url'],
        url: "some_url", 
    },
    {
        name: "Nabu", diameter: "string", rotation_period: "string",  orbital_period: "string",
        gravity: "string",  population: "string", climate: "string",  terrain: "string",
        surface_water: "string", residents: ['url', 'url'], films: ['url', 'url'],
        url: "some_url", 
    }
]


export const filmsTestData: FilmType[] = [
    {
        title: "New Hope", episode_id: 1, opening_crawl: "string", director: "string",
        release_date: "string", species: ['url', 'url2'], starships: ['url', 'url2'], vehicles: ['url', 'url2'],
        characters: ['url', 'url2'], planets: ['url', 'url2'],
        url: "string",
    },
    {
        title: "Empire Strikes Back", episode_id: 2, opening_crawl: "string", director: "string",
        release_date: "string", species: ['url', 'url2'], starships: ['url', 'url2'], vehicles: ['url', 'url2'],
        characters: ['url', 'url2'], planets: ['url', 'url2'],
        url: "string",
    }
]


export const starshipsTestData: StarshipType[] = [
    {
        name: "Starship 1", model: "string", starship_class: "string", manufacturer: "string",
        cost_in_credits: "string",length: "string", crew: "string", passengers: "string",
        max_atmosphering_speed: "string", hyperdrive_rating: "string", MGLT: "string",
        cargo_capacity: "string",  consumables: "string", films: ['string1', 'string2'], 
        pilots: ['string1', 'string2'],
        url: "string",
    },
    {
        name: "Starship 2", model: "string", starship_class: "string", manufacturer: "string",
        cost_in_credits: "string",length: "string", crew: "string", passengers: "string",
        max_atmosphering_speed: "string", hyperdrive_rating: "string", MGLT: "string",
        cargo_capacity: "string",  consumables: "string", films: ['string1', 'string2'], 
        pilots: ['string1', 'string2'],
        url: "string",
    }
]


export const vehicleTestData: VehicleType[] = [
    {
        name: "Vehicle 1", model: "string", vehicle_class: "string", manufacturer: "string", length: "string",
        cost_in_credits: "string", crew: "string", passengers: "string", max_atmosphering_speed: "string",
        cargo_capacity: "string", consumables: "string",
        films: ['url1', 'url2'],
        pilots: ['url1', 'url2'],
        url: "string",
    },
    {
        name: "Vehicle 2", model: "string", vehicle_class: "string", manufacturer: "string", length: "string",
        cost_in_credits: "string", crew: "string", passengers: "string", max_atmosphering_speed: "string",
        cargo_capacity: "string", consumables: "string",
        films: ['url1', 'url2'],
        pilots: ['url1', 'url2'],
        url: "string",
    }
]


export const speciesTestData: SpecieType[] = [
    {
        name: "Specie 1", classification: "string", designation: "string", average_height: "string",
        average_lifespan: "string", eye_colors: "string", hair_colors: "string", skin_colors: "string",
        language: "string", homeworld: "string",
        people: ['url1', 'url2'],
        films: ['url1', 'url2'],
        url: "string",
    },
    {
        name: "Specie 2", classification: "string", designation: "string", average_height: "string",
        average_lifespan: "string", eye_colors: "string", hair_colors: "string", skin_colors: "string",
        language: "string", homeworld: "string",
        people: ['url1', 'url2'],
        films: ['url1', 'url2'],
        url: "string",
    }
]