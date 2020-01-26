import React from "react";
import styled from "styled-components";

const Comment = ({className, name, comment}) => (
    <div className={className}>
        <Author>{`Author: ${name}`}</Author>
        <Content>{comment}</Content>
    </div>
);

export default styled(Comment)`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #A6A6A6;
    margin-bottom: 10px;
`

const Author = styled.span`
    font-weight: 600;
`;

const Content = styled.span`
    margin-top: 10px;
`;
