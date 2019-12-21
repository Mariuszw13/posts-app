import React from 'react';
import styled from 'styled-components'
import PostItem from "./PostItem";
import classnames from 'classnames'
import Pagination from "../pagination/Pagination";

const PostsList = ({className, posts, grid}) => {
    return (
        <Pagination>
            <div className={classnames(className, grid && "grid")}>
                {posts && posts.map(post => <PostItem className={classnames(grid && "grid")} key={post.id} {...post} />)}
            </div>
        </Pagination>

    )
}

export default styled(PostsList)`
    
    display: flex;
    flex-direction: column;
    justify-items: flex-start;

    &.grid {
        flex-direction: row;
        flex-flow: wrap;
    }

`