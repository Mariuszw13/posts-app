import React from 'react'
import {NavLink, useParams} from 'react-router-dom';
import styled from "styled-components";

const lastPage = 10;
const firstPage = 1;

const getPages = (currentPage) => {
    const first = currentPage - 1 >= firstPage ? currentPage - 1 : currentPage + 2;
    const second = currentPage < lastPage ? currentPage + 1 : currentPage - 2;
    return [currentPage, first, second].sort((a, b) => a - b)
};

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
                    <NavigationLink to={`/${firstPage}`}>{firstPage}</NavigationLink>
                    <span>...</span>
                </>}
                {pages.map(page => <NavigationLink key={page} to={`/${page}`}>{page}</NavigationLink>)}
                {currentPage < lastPage - 1 &&
                <>
                    {currentPage !== lastPage - 2 && <span>...</span>}
                    <NavigationLink to={`/${lastPage}`}>{lastPage}</NavigationLink>
                </>}
            </div>
        </>
    )
};

const NavigationLink = styled(NavLink)`
    margin: 5px;
    
    &.active {
        color: aqua;
    }
`;

export default Pagination
