import { CircularProgress, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ComaSeparatedLink from "../components/ComaSeparatedLink";
import DetailItemCell from "../components/DetailItemCell";
import Main from "../components/Main";
import { useAppSelector } from "../hooks/reducerHooks";
import getIdFromUrl from "../utils/getIdFromUrl";


const VehicleDetailPage = () => {
    const {data, error, loading} = useAppSelector(state => state.vehicleDetail);

    const films = data?.additional_info.films;
    const pilots = data?.additional_info.pilots;

    return (
        <Main>
            <Typography variant="h3">
                Vehicle detail page
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
                                    feature="Class"
                                    featureValue={data?.vehicle_class}
                                />

                                <DetailItemCell 
                                    feature="Model"
                                    featureValue={data?.model}
                                />

                                <DetailItemCell 
                                    feature="Cargo capacity"
                                    featureValue={data?.cargo_capacity}
                                />

                                <DetailItemCell 
                                    feature="Max speed"
                                    featureValue={data?.max_atmosphering_speed}
                                />

                                <DetailItemCell 
                                    feature="Consumables"
                                    featureValue={data?.consumables}
                                />

                                <DetailItemCell 
                                    feature="Cost in credits"
                                    featureValue={data?.cost_in_credits}
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
                                    {pilots?.length ? (
                                        <>
                                            {pilots.map((people, idx) => {
                                                return <ComaSeparatedLink 
                                                            textValue={people.name}
                                                            key={people.name}
                                                            linkRoute="people"
                                                            idx={idx}
                                                            itemID={getIdFromUrl(people.url)}
                                                            listLength={pilots.length}
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


export default VehicleDetailPage;