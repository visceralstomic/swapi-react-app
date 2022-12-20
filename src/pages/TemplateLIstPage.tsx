import React from "react";
import List from "../components/List";
import Main from "../components/Main";
import Pagination from "../components/Pagination";
import Search from "../components/Search";
import { FnReturnType } from "../types/common";
import CircularProgress from "@mui/material/CircularProgress";
import { Alert, AlertTitle, Typography } from "@mui/material";


interface TemplateListPageProps<T> extends FnReturnType {
    title: string,
    loading: boolean,
    error: null | string,
    count: number,
    limit: number,
    page: number,
    searchValue: string
    data: T[],
    renderItems: (item: T) => React.ReactNode;
}


function TemplateListPage<T> ({
    title, error, count, limit,
    loading, data, renderItems,
    page, searchValue, changeSearch, changePage, 
    }: TemplateListPageProps<T>) {
    return (
        <Main>
            <Typography variant="h2" 
            sx={{
                fontWeight: 700
            }}>
                {title}
            </Typography>
            <Search
                        searchValue={searchValue}
                        changeSearch={changeSearch}
            />
            {loading ? (
                <div className="loader-container">
                    <CircularProgress color="inherit" />
                </div>
            ) : error ? ( 
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    <strong>{error}</strong>
                </Alert>
            ):(
                <>

                    {data.length ? (
                        <List
                            items={data}
                            renderItems={renderItems}
                        />
                    ) : (
                        <Alert severity="info">
                            No matches detected
                        </Alert> 
                    )}
                    
                    <Pagination 
                        changePage={changePage}
                        limit={limit}
                        page={page}
                        count={count}
                    />
                </>
            )}
            
        </Main>
    )
}


export default TemplateListPage;