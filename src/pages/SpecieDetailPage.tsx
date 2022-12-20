import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ComaSeparatedLink from "../components/ComaSeparatedLink";
import DetailItemCell from "../components/DetailItemCell";
import Main from "../components/Main";
import { useAppSelector } from "../hooks/reducerHooks";
import getIdFromUrl from "../utils/getIdFromUrl";


const SpecieDetailPage = () => {
    const {data, error, loading} = useAppSelector(state => state.specieDetail);

    const films = data?.additional_info.films;
    const people = data?.additional_info.people;
    return (
        <Main>
            <Typography variant="h3">
                Specie detail page
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
                                    feature="Classification"
                                    featureValue={data?.classification}                                      
                                />

                                <DetailItemCell 
                                    feature="Homeworld"
                                    featureValue={data?.homeworld}                                      
                                />


                                <DetailItemCell 
                                    feature="Language"
                                    featureValue={data?.language}                                      
                                />

                                <DetailItemCell 
                                    feature="Designation"
                                    featureValue={data?.designation}                                      
                                />


                                <DetailItemCell 
                                    feature="Average height"
                                    featureValue={data?.average_height}                                      
                                />

                                <DetailItemCell 
                                    feature="Average lifespan"
                                    featureValue={data?.average_lifespan}                                      
                                />
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

                                <Grid item xs={3}>
                                    Films:
                                </Grid>

                                <Grid item xs={9}>
                                    {films?.length ? (
                                        <>
                                            {films.map((film, idx) => {
                                                return <ComaSeparatedLink 
                                                            textValue={film.title}
                                                            key={film.title}
                                                            linkRoute="films"
                                                            idx={idx}
                                                            itemID={getIdFromUrl(film.url)}
                                                            listLength={films.length}
                                                        />
                                            } )}
                                        </>
                                    ) : "n/a"}
                                </Grid>

                                <Grid item xs={3}>
                                    Pilots:
                                </Grid>

                                <Grid item xs={9}>
                                    {people?.length ? (
                                        <>
                                            {people.map((peopleItem, idx) => {
                                                return <ComaSeparatedLink 
                                                            textValue={peopleItem.name}
                                                            key={peopleItem.name}
                                                            linkRoute="people"
                                                            idx={idx}
                                                            itemID={getIdFromUrl(peopleItem.url)}
                                                            listLength={people.length}
                                                        />
                                            } )}
                                        </>
                                    ) : "n/a"}
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </>
            )}
        </Main>
    )   
}


export default SpecieDetailPage;