import React from 'react';
import {getPosts} from "../services";
import {withCookies} from "react-cookie";
import PostsList from "../components/post/PostsList";


class MainPage extends React.Component {

    state = {
        posts: []
    }

    componentDidMount() {
        const token = this.props.cookies.cookies.authToken;
        const page = this.props.match.params.page || 1;

        getPosts(this.onPostsFetchSuccess, () => null, page, token);
    }

    onPostsFetchSuccess = (data) => {
        this.setState({posts: data})
    }

    render() {
        return <div>
            <PostsList posts={this.state.posts}/>
        </div>
    }
}

export default withCookies(MainPage);