import React, {useState} from 'react'
import Modal from "@material-ui/core/Modal";
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const AddCommentModal = ({className, open, onClose, onCommentSubmit}) => {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [userAccepted, setCheckbox] = useState(false);

    const isButtonDisabled = !name || !comment || !userAccepted;

    return (
        <Modal open={open} onClose={onClose}>
            <div className={className}>
                <h2>Add comment</h2>
                <TextField className="name-input"
                           label="name"
                           variant="outlined"
                           value={name}
                           onChange={event => setName(event.target.value)}
                />
                <TextField className="comment-input"
                           label="Your comment"
                           variant="outlined"
                           multiline
                           rows={5}
                           value={comment}
                           onChange={event => setComment(event.target.value)}
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={userAccepted} onChange={() => setCheckbox(!userAccepted)}/>
                    }
                    label="I Accept"
                />
                <div className="buttons-container">
                    <Button className="close-button"
                            onClick={() => onCommentSubmit(name, comment)}
                            color="primary"
                            disabled={isButtonDisabled}>
                        submit
                    </Button>
                    <Button className="close-button" onClick={onClose} color="secondary">close</Button>
                </div>
            </div>
        </Modal>
    )
}
export default styled(AddCommentModal)`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 40vw;
    padding: 10px;
    top: calc(40% - 20vh);
    left: calc(50% - 20vw);
    background-color: white;
    
    .name-input {
        width: 50%;
        margin-bottom: 10px;
    }
    
    .description {
        margin-bottom: 20px;
    }
    
    .buttons-container {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
`;