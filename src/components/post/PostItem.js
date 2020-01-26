import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import classnames from 'classnames';
import {getAuthor} from "../../services";
import {withCookies} from "react-cookie";
import AuthorModal from "../author/AuthorModal";
import {useHistory} from 'react-router-dom'

const PostItem = ({className, id, date, excerpt, thumbnail, title, authorId, cookies, grid}) => {
    const [excerptVisible, toggleExcerpt] = useState(false);
    const [modalVisible, toggleModal] = useState(false);
    const [authorData, setAuthorData] = useState(null);
    const history = useHistory();

    const onModalOpen = () => {
        toggleModal(true);
        !authorData && getAuthor(data => setAuthorData(data), authorId, cookies.cookies.authToken)
    };

    return (
        <div className={classnames(className, grid && "grid")} onClick={() => grid && history.push(`/post/${id}`)}>
            <Container>
                <Thumbnail className="thumbnail" src={thumbnail} alt="thumbnail"/>
                <PostData>
                    <span>{date}</span>
                    <Title onClick={() => !grid && history.push(`/post/${id}`)}
                           className={classnames(grid && "grid")}>{title}</Title>
                </PostData>
                {!grid && <Controls>
                    <Button onClick={() => toggleExcerpt(true)}>e</Button>
                    <Button onClick={onModalOpen}>i</Button>
                </Controls>}
            </Container>
            <Excerpt className={classnames(excerptVisible && "active")}>
                <span>{excerpt}</span>
                <Button onClick={() => toggleExcerpt(false)} color="secondary">close</Button>
            </Excerpt>
            <AuthorModal open={modalVisible} authorData={authorData} onClose={() => toggleModal(false)}/>
        </div>
    )
}

export default styled(withCookies(PostItem))`
    border: 1px solid #A6A6A6;
    padding: 10px;
    margin: 10px 0;
    
    &.grid {
        width: 20%;
        margin-right: 10px;
        cursor: pointer;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100px;
`;

const Thumbnail = styled.img`
    display: block;
    max-height: 100%;
    max-width: 100px;
    width: auto;
    height: auto;
`;

const Title = styled.span`
    display: block;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    
    :hover {
        color: #A6A6A6;
    }
    
    &.grid {
        :hover {
            color: #000;
        }
    }
`;

const Excerpt = styled.div`
    height: 0;
    overflow: hidden;
    transition: all .6s ease-in-out;
    
    &.active {
        height: 100%;
    }
`;

const Controls = styled.div`
    align-self: center;
    margin-left: auto;
`;

const PostData = styled.div`
    margin-left: 10px;
`

