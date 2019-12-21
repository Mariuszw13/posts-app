import React from 'react'
import Modal from "@material-ui/core/Modal";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const AuthorModal = ({className, open, onClose, authorData}) => {
    const data = authorData || {};
    return (
        <Modal open={open} onClose={onClose}>
            <div className={className}>
                <header>
                    <h2 className="author-name">{data.name}</h2>
                    <img className="avatar" src={data.avatar} alt="avatar"/>
                </header>
                <span>{data.description}</span>
                <Button className="close-button" onClick={onClose} color="secondary">close</Button>
            </div>
        </Modal>
    )
}
export default styled(AuthorModal)`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 30vw;
    padding: 10px;
    top: calc(40% - 20vh);
    left: calc(50% - 15vw);
    background-color: white;
    
    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    
    h2 {
        align-self: center;
    }
    
    .avatar {
        max-width: 120px;
        height: 120px;
        justify-content: flex-end;
    }
    
    .description {
        margin-bottom: 20px;
    }
    
    .close-button {
        margin-top: 20px;
        margin-left: auto;
        width: 30%;
    }
`;