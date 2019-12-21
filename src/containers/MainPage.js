import React from 'react';
import {getPosts} from "../services";
import {withCookies} from "react-cookie";
import PostsList from "../components/post/PostsList";
import styled from "styled-components";
import {DISPLAY_TYPE, ORDER, SORTING_OPTIONS} from "../utils/enums";
import ListControls from "../components/post/ListControls";


class MainPage extends React.Component {

    state = {
        posts: [],
        sortBy: SORTING_OPTIONS.TITLE,
        order: ORDER.ASCENDING,
        displayType: DISPLAY_TYPE.LIST
    };

    componentDidMount() {
        this.fetchPosts();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.page !== this.props.match.params.page ||
            prevState.sortBy !== this.state.sortBy ||
            prevState.order !== this.state.order) {
            this.fetchPosts();
        }
    }

    fetchPosts = () => {
        const {cookies, match} = this.props;
        const token = cookies.cookies.authToken;
        const page = match.params.page || 1;
        const {order, sortBy} = this.state;

        getPosts(this.onPostsFetchSuccess, () => null, page, token, order, sortBy);
    };

    onPostsFetchSuccess = (data) => {
        this.setState({posts: data})
    };

    handleListOptionsChange = (option) => (event) => {
        this.setState({[option]: event.target.value})
    }

    render() {
        const {posts, displayType, order, sortBy} = this.state;
        return <div className={this.props.className}>
            <ListControls handleChange={this.handleListOptionsChange}
                          displayType={displayType}
                          order={order}
                          sortBy={sortBy}
            />
            <PostsList posts={posts} grid={displayType === DISPLAY_TYPE.GRID}/>
        </div>
    }
}

export default styled(withCookies(MainPage))`
    padding: 10px 10%;
`;