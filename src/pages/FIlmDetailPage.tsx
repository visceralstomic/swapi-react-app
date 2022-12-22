import React from "react";
import ComaSeparatedLink from "../components/ComaSeparatedLink";
import Main from "../components/Main";
import { useAppSelector } from "../hooks/reducerHooks";
import getIdFromUrl from "../utils/getIdFromUrl";
import CircularProgress from "@mui/material/CircularProgress";
import { Divider, Grid, Typography } from "@mui/material";
import DetailItemCell from "../components/DetailItemCell";


const FilmDetailPage = () => {
   const {data, error, loading} = useAppSelector(state => state.filmDetail);

   const characters = data?.additional_info?.characters;
   const planets = data?.additional_info?.planets;
   const starships = data?.additional_info?.starships;
   const vehicles = data?.additional_info?.vehicles;
   const species = data?.additional_info?.species;


   return (
        <Main>
         <Typography variant="h3">
            Film detail page
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
                                    {data?.title} 
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
                              feature="Director"
                              featureValue={data?.director}
                                
                        />


                        <DetailItemCell 
                              feature="Opening crawl"
                              featureValue={data?.opening_crawl}
                                
                        />



                        <DetailItemCell 
                              feature="Release data"
                              featureValue={data?.release_date}
                                
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
                        <Grid item xs={4}>
                           Characters:
                        </Grid>

                        <Grid item xs={8}>
                           {characters?.length ? (
                           <>
                              {characters.map((character, idx) => {
                                 const charID = getIdFromUrl(character.url);
                                 return <ComaSeparatedLink 
                                             itemID={charID}
                                             key={character.name}
                                             idx={idx}
                                             textValue={character.name}
                                             listLength={characters.length}
                                             linkRoute="people"
                                          />
                              })}
                           </>
                        ) : "n/a"}
                        </Grid>

                        <Grid item xs={4}>
                           Planets:
                        </Grid>

                        <Grid item xs={8}>
                           {planets?.length ? (
                              <>
                                 {planets.map((planet, idx) => {
                                    const planetID = getIdFromUrl(planet.url);
                                    return <ComaSeparatedLink 
                                                itemID={planetID}
                                                key={planet.name}
                                                idx={idx}
                                                textValue={planet.name}
                                                listLength={planets.length}
                                                linkRoute="planets"
                                             />
                                 })}
                              </>
                           ) : "n/a"}
                        </Grid>

                        <Grid item xs={4}>
                           Starships:
                        </Grid>

                        <Grid item xs={8}>
                           {starships?.length ? (
                              <>
                                 {starships.map((starship, idx) => {
                                    const starshipID = getIdFromUrl(starship.url);
                                    return <ComaSeparatedLink 
                                                itemID={starshipID}
                                                key={starship.name}
                                                idx={idx}
                                                textValue={starship.name}
                                                listLength={starships.length}
                                                linkRoute="starships"
                                             />
                                 })}
                              </>
                           ) : "n/a"}
                        </Grid>


                        <Grid item xs={4}>
                           Vehicles:
                        </Grid>

                        <Grid item xs={8}>
                           {vehicles?.length ? (
                              <>
                                 {vehicles.map((vehicle, idx) => {
                                    const vehicleID = getIdFromUrl(vehicle.url);
                                    return <ComaSeparatedLink 
                                                itemID={vehicleID}
                                                key={vehicle.name}
                                                idx={idx}
                                                textValue={vehicle.name}
                                                listLength={vehicles.length}
                                                linkRoute="vehicles"
                                             />
                                 })}
                              </>
                           ) : "n/a"}
                        </Grid>

                        <Grid item xs={4}>
                           Species:
                        </Grid>

                        <Grid item xs={8}>
                           {species?.length ? (
                              <>
                                 {species.map((specie, idx) => {
                                    const specieID = getIdFromUrl(specie.url);
                                    return <ComaSeparatedLink 
                                                itemID={specieID}
                                                key={specie.name}
                                                idx={idx}
                                                textValue={specie.name}
                                                listLength={species.length}
                                                linkRoute="species"
                                             />
                                 })}
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


export default FilmDetailPage;