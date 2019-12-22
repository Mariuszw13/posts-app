import React from 'react'
import {NavLink, useParams} from 'react-router-dom';
import styled from "styled-components";

const lastPage = 10;
const firstPage = 1;

const getPages = (currentPage) => {
    const first = currentPage - 1 >= firstPage ? currentPage - 1 : currentPage + 2;
    const second = currentPage < lastPage ? currentPage + 1 : currentPage - 2;
    return [currentPage, first, second].sort((a, b) => a - b)
}

const Pagination = ({className, children}) => {
    const params = useParams();
    const currentPage = params.page ? parseInt(params.page) : 1;
    const pages = getPages(currentPage);
    return (
        <>
            {children}
            <div className={className}>
                {currentPage === lastPage &&
                <>
                    <NavLink className="nav-link" to={`/${firstPage}`}>{firstPage}</NavLink>
                    <span>...</span>
                </>}
                {pages.map(page => <NavLink key={page} className="nav-link" to={`/${page}`}>{page}</NavLink>)}
                {currentPage < lastPage - 1 &&
                <>
                    {currentPage !== lastPage - 2 && <span>...</span>}
                    <NavLink className="nav-link" to={`/${lastPage}`}>{lastPage}</NavLink>
                </>}
            </div>
        </>
    )

}

export default styled(Pagination)`

    .nav-link {
        margin: 5px;
        
        &.active {
            color: aqua;
        }
    }

`;