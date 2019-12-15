import React from 'react';
import styled from 'styled-components'
import PostItem from "./PostItem";
import classnames from 'classnames'

const PostsList = ({className, posts, grid}) => {
    return (
        <div className={classnames(className, grid && "grid")}>
            {posts.map(post => <PostItem key={post.id} {...post} />)}
        </div>

    )
}

export default styled(PostsList)`
    
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    padding: 10px 10%;

    &.grid {
        flex-direction: row;
    }

`