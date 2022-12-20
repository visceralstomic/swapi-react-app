import { Pagination } from "@mui/material";
import React from "react";


interface PaginationProps {
    count: number,
    limit: number,
    page: number,
    changePage: (page:number) => void
}

const CustPagination: React.FC<PaginationProps> = ({count, page, limit, changePage}) => {
    const pagesCount = Math.ceil(count / limit);
    
    return (
        <div className="pagination">
            <Pagination 
                page={page}
                count={pagesCount}
                onChange={(event, pageItem) => changePage(pageItem)}
                color="primary"            
            />
        </div>
    )
}


export default CustPagination;