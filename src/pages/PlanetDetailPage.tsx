import React from "react";
import ComaSeparatedLink from "../components/ComaSeparatedLink";
import Main from "../components/Main";
import { useAppSelector } from "../hooks/reducerHooks";
import getIdFromUrl from "../utils/getIdFromUrl";
import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import DetailItemCell from "../components/DetailItemCell";

const PlanetDetailPage: React.FC = () => {
    const {data, loading, error} = useAppSelector(state => state.planetDetail);

    const people = data?.additional_info.people;
    const films = data?.additional_info.films;
    
    return (
        <Main>
            <Typography variant="h3">
                Planet detail page
            </Typography>
            {loading ? (
                <div className="loader-container">
                    <CircularProgress color="inherit" />
                </div>
            ) : (
                <>
                    <Divider 
                        textAlign="left"
                                        
                    >
                        <Typography 
                                    sx={{
                                                mt: "25px",
                                                mb: "25px",
                                                
                                            }}
                                variant="h4">
                                    {data?.name} 
                        </Typography>
                    </Divider>
                    <Grid container
                        rowSpacing={3}
                    >
                        <Grid item xs={12} sm={6}>
                            <Typography 
                                sx={{
                                    mb: "15px"
                                }}
                                variant="h5">
                                    Main info
                            </Typography>

                            <Grid container
                                justifyContent="space-between"
                                columnSpacing={2}
                            >

                                <DetailItemCell 
                                    feature="Climate"
                                    featureValue={data?.climate}
                                />

                                <DetailItemCell 
                                    feature="Diameter"
                                    featureValue={data?.diameter}
                                />


                                <DetailItemCell 
                                    feature="Gravity"
                                    featureValue={data?.gravity}
                                />


                                <DetailItemCell 
                                    feature="Gravity"
                                    featureValue={data?.gravity}
                                />


                                <DetailItemCell 
                                    feature="Orbital period"
                                    featureValue={data?.orbital_period}
                                />


                                <DetailItemCell 
                                    feature=" Surface water"
                                    featureValue={data?.surface_water}
                                />

                            </Grid>   

                        </Grid>

                       
                        
                        <Grid item  xs={12} sm={6}>
                            <Typography 
                                sx={{
                                    mb: "15px"
                                }}
                                variant="h5">
                                    Addition info
                            </Typography>  

                            <Grid container>
                                <Grid item xs={3}>
                                    People:
                                </Grid>
                                <Grid item xs={9}>
                                    {people?.map((peopleItem, idx) => {
                                        
                                        return <ComaSeparatedLink
                                                    key={peopleItem.name}
                                                    listLength={people.length} 
                                                    linkRoute="people"
                                                    itemID={getIdFromUrl(peopleItem.url)}
                                                    idx={idx}
                                                    textValue={peopleItem.name}

                                                />
                                    })}
                                </Grid>


                                <Grid item xs={3}>
                                    Films:
                                </Grid>
                                <Grid item xs={9}>
                                    {films?.map((film, idx) => {
                                        
                                        return <ComaSeparatedLink
                                                    key={film.title}
                                                    listLength={films.length} 
                                                    linkRoute="people"
                                                    itemID={getIdFromUrl(film.url)}
                                                    idx={idx}
                                                    textValue={film.title}

                                                />
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </>
            )}
        </Main>
    )
}


export default PlanetDetailPage;