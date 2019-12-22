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
            <div className="main-container">
                <img className="thumbnail" src={thumbnail} alt="thumbnail"/>
                <div className="post-data">
                    <span className="date">{date}</span>
                    <span onClick={() => !grid && history.push(`/post/${id}`)} className="title">{title}</span>
                </div>
                {!grid && <div className="controls">
                    <Button onClick={() => toggleExcerpt(true)}>e</Button>
                    <Button onClick={onModalOpen}>i</Button>
                </div>}
            </div>
            <div className={classnames("excerpt", excerptVisible && "active")}>
                <span>{excerpt}</span>
                <Button onClick={() => toggleExcerpt(false)} color="secondary">close</Button>
            </div>
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
        
        .title {
            :hover {
                color: #000;
            }
        }

    }

    .main-container {
        display: flex;
        flex-direction: row;
        height: 100px;
    }
    
    .thumbnail {
        display: block;
        max-height: 100%;
        max-width: 100px;
        width: auto;
        height: auto;
    }
    
    .post-data {
        margin-left: 10px;
    }
    
    .title {
        display: block;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        
        :hover {
            color: #A6A6A6;
        }
    }
    
    .controls {
        align-self: center;
        margin-left: auto;
    }
    
    .excerpt {
        height: 0;
        overflow: hidden;
        transition: all .6s ease-in-out;
        
        &.active {
            height: 100%;
        }
    }
`;

