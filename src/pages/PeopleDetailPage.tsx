import React from "react";
import { Link } from "react-router-dom";
import ComaSeparatedLink from "../components/ComaSeparatedLink";
import Main from "../components/Main";
import { useAppSelector } from "../hooks/reducerHooks";
import { PeopleType } from "../types/peopleType";
import getIdFromUrl from "../utils/getIdFromUrl";
import CircularProgress from "@mui/material/CircularProgress";
import { Divider, Grid, Typography } from "@mui/material";
import DetailItemCell from "../components/DetailItemCell";




interface PeopleDetailPageCompProps {
    peopleItem: PeopleType | null
}


const PeopleDetailPageComp: React.FC<PeopleDetailPageCompProps> = ({peopleItem}) => {
    const home = peopleItem?.additional_info?.home;
    const films = peopleItem?.additional_info?.films;
    const vehicles = peopleItem?.additional_info?.vehicles;
    const starships = peopleItem?.additional_info?.starships;
    const species = peopleItem?.additional_info?.species;

    let homeID: string | number = home?.url !== undefined ? getIdFromUrl(home?.url) : "";

    return (
        <div>
            <Divider 

                textAlign="left"
                                
            >
                <Typography 
                            sx={{
                                        mt: "25px",
                                        mb: "25px",
                                        
                                    }}
                        variant="h4">
                            {peopleItem?.name} 
                    </Typography>
            </Divider>

            <Grid container rowSpacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography 
                        sx={{
                            mb: "15px"
                        }}
                        variant="h5">
                            Main info
                    </Typography>
                    <Grid container>
                        <DetailItemCell 
                            feature="Birth year"
                            featureValue={peopleItem?.birth_year}
                        />

                        <DetailItemCell 
                            feature="Gender"
                            featureValue={peopleItem?.gender}
                        />

                        <DetailItemCell 
                            feature="Hair color"
                            featureValue={peopleItem?.hair_color}
                        />


                        <DetailItemCell 
                            feature="Height"
                            featureValue={peopleItem?.height}
                        />


                        <DetailItemCell 
                            feature="Skin color"
                            featureValue={peopleItem?.skin_color}
                        />

                        <Grid item xs={5}>
                            Home: 
                        </Grid>

                        <Grid item xs={7}
                            sx={{
                                textAlign: "left"
                           }}
                        >
                            <Link className="item-link" to={`/planets/${homeID}`}>{home?.name}</Link>
                        </Grid>

                    </Grid>      
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography 
                        sx={{
                            mb: "15px"
                        }}
                        variant="h5">
                            Additional info
                    </Typography>
                    <Grid container>
                        <Grid item xs={4}>
                            Films: 
                        </Grid>

                        <Grid item xs={8}>
                            {films?.map((film, idx) => {
                                return  <ComaSeparatedLink 
                                            key={film.title}
                                            listLength={films.length}
                                            idx={idx}
                                            textValue={film.title}
                                            linkRoute={'films'}
                                            itemID={getIdFromUrl(film.url) }
                                        />
                            })}
                        </Grid>

                        <Grid item xs={4}>
                             Vehicles:
                        </Grid>

                        <Grid item xs={8}>
                            {vehicles?.length ? (
                                    <>
                                       {vehicles?.map((vehicle, idx) => {
                                            return  <ComaSeparatedLink 
                                                        key={vehicle.name}
                                                        listLength={vehicles.length}
                                                        idx={idx}
                                                        textValue={vehicle.name}
                                                        linkRoute={'vehicles'}
                                                        itemID={getIdFromUrl(vehicle.url) }
                                                    />
                                        })}
                                                    
                                    </>
                                   ) : "n/a" }
                        </Grid>

                        <Grid item xs={4}>
                            Starships:
                        </Grid>

                        <Grid item xs={8}>
                            {starships?.length ? (
                                    <>
                                       {starships?.map((starship, idx) => {
                                            return  <ComaSeparatedLink 
                                                        key={starship.name}
                                                        listLength={starships.length}
                                                        idx={idx}
                                                        textValue={starship.name}
                                                        linkRoute={'starships'}
                                                        itemID={getIdFromUrl(starship.url) }
                                                    />
                                        })}
                                                    
                                    </>
                                   ) : "n/a" }
                        </Grid>


                        <Grid item xs={4}>
                            Species:
                        </Grid>

                        <Grid item xs={8}>
                                 {species?.length ? (
                                    <>
                                       {species?.map((specie, idx) => {
                                            return  <ComaSeparatedLink 
                                                        key={specie.name}
                                                        listLength={species.length}
                                                        idx={idx}
                                                        textValue={specie.name}
                                                        linkRoute={'species'}
                                                        itemID={getIdFromUrl(specie.url) }
                                                    />
                                        })}
                                                    
                                    </>
                                   ) : "n/a" }
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
            

                    
                    
        </div>
    )
}



const PeopleDetailPage: React.FC = () => {
    const {data, loading, error} = useAppSelector(state => state.peopleDetail);



    return (
        <Main>
            <Typography variant="h3">
                People detail page
            </Typography>
            {loading ? (
                <div className="loader-container">
                    <CircularProgress color="inherit" />
                </div>
            ) : (
                <PeopleDetailPageComp peopleItem={data as PeopleType} />                 
            )}
            
        </Main>
    )
}


export default PeopleDetailPage;