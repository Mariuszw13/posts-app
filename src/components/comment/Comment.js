import React from "react";
import styled from "styled-components";

const Comment = ({className, name, comment}) => (
    <div className={className}>
        <span className="author">{`Author: ${name}`}</span>
        <span className="content">{comment}</span>
    </div>
)

export default styled(Comment)`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #A6A6A6;
    margin-bottom: 10px;
    
    .author {
        font-weight: 600;
    }
    
    .content {
        margin-top: 10px;
    }
`