import React from 'react'
import Modal from "@material-ui/core/Modal";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const AuthorModal = ({className, open, onClose, authorData}) => {
    const data = authorData || {};
    return (
        <Modal open={open} onClose={onClose}>
            <div className={className}>
                <Header>
                    <AuthorName>{data.name}</AuthorName>
                    <Avatar src={data.avatar} alt="avatar"/>
                </Header>
                <Description>{data.description}</Description>
                <CloseButton onClick={onClose} color="secondary">close</CloseButton>
            </div>
        </Modal>
    )
};

export default styled(AuthorModal)`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 30vw;
    padding: 10px;
    top: calc(40% - 20vh);
    left: calc(50% - 15vw);
    background-color: white;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const AuthorName = styled.h2`
    align-self: center;
`;

const Avatar = styled.img`
    max-width: 120px;
    height: 120px;
    justify-content: flex-end;
`;

const Description = styled.span`
    margin-bottom: 20px;
`;

const CloseButton = styled(Button)`
    margin-top: 20px;
    margin-left: auto;
    width: 30%;
`;