import React from "react";
import {withCookies} from "react-cookie";
import {addComment, getAuthor, getComments, getPostAndComments, putReadingTime} from "../services";
import Button from "@material-ui/core/Button";
import AuthorModal from "../components/author/AuthorModal";
import Comment from "../components/comment/Comment";
import styled from "styled-components";
import AddCommentModal from "../components/comment/AddCommentModal";

class SinglePostPage extends React.Component {
    state = {
        postData: {},
        startTime: {},
        authorModalVisible: false,
        commentModalVisible: false,
        authorData: null,
        comments: []
    };

    componentDidMount() {
        this.fetchPost();
    }

    componentWillUnmount() {
        this.putReadingTime();
    }

    putReadingTime = () => {
        const {cookies, match} = this.props;
        const token = cookies.cookies.authToken;
        const id = match.params.id;
        const readingTime = new Date().getTime() - this.state.startTime;

        putReadingTime(id, token, readingTime)
    };

    fetchPost = () => {
        const {cookies, match} = this.props;
        const token = cookies.cookies.authToken;
        const id = match.params.id;

        getPostAndComments(this.onDataFetchSuccess, id, token);
    };

    onDataFetchSuccess = field => data => {
        this.setState({[field]: data, startTime: new Date().getTime()})
    };

    toggleAuthorModal = visible => () => {
        this.setState({authorModalVisible: visible})
    };

    toggleCommentModal = visible => () => {
        this.setState({commentModalVisible: visible})
    };

    setAuthorData = (authorData) => {
        this.setState({authorData})
    };

    onAuthorModalOpen = () => {
        this.toggleAuthorModal(true)();
        const authorId = this.state.postData.authorId;
        !this.state.authorData && authorId && getAuthor(this.setAuthorData, authorId, this.props.cookies.cookies.authToken)
    };

    submitComment = (name, comment) => {
        const {cookies, match} = this.props;
        const token = cookies.cookies.authToken;
        const id = match.params.id;
        this.toggleCommentModal(false)();
        addComment(id, token, name, comment);
        getComments(this.onDataFetchSuccess("comments"), id, token);
    };

    render() {
        const {date, thumbnail, title, content} = this.state.postData;
        return (
            <div className={this.props.className}>
                <h2>{title}</h2>
                <img className="thumbnail" src={thumbnail} alt="thumbnail"/>
                <PostContent>
                    <PostHeader>
                        <span>{date}</span>
                        <Button onClick={this.onAuthorModalOpen} variant="contained">i</Button>
                    </PostHeader>
                    <p>{content}</p>
                </PostContent>
                <Button variant="contained" onClick={this.toggleCommentModal(true)}>comment</Button>
                <CommentSection>
                    {this.state.comments.map((comment, index) => <Comment key={index} {...comment} />)}
                </CommentSection>
                <AuthorModal open={this.state.authorModalVisible}
                             onClose={this.toggleAuthorModal(false)}
                             authorData={this.state.authorData}
                />
                <AddCommentModal open={this.state.commentModalVisible}
                                 onClose={this.toggleCommentModal(false)}
                                 onCommentSubmit={this.submitComment}
                />
            </div>
        )
    }
}

export default styled(withCookies(SinglePostPage))`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .comments-section {
        
    }
`;

const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`;

const PostContent = styled.div`
    width: 70%;
`;

const CommentSection = styled.div`
    margin-top: 10px;
    width: 70%;
`;
