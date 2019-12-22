import axios from 'axios'
import {apiUrl} from '../config'
import {ORDER, SORTING_OPTIONS} from "../utils/enums";


const instance = axios.create({baseURL: apiUrl});

export const tryLogin = async (credentials, onSuccess, onFailure) => {
    try {
        const response = await instance.post("/auth", credentials);
        const token = response.data.data.token;
        onSuccess(token);
    } catch (e) {
        console.log(e);
        onFailure();
    }
};

/**
 *
 *  authorId
 *  content
 *  date
 *  excerpt
 *  id
 *  thumbnail
 *  title
 */

const {ASCENDING} = ORDER;
const {TITLE} = SORTING_OPTIONS;

export const getPosts = async (onSuccess, onFailure, page, token, order = ASCENDING, orderBy = TITLE) => {
    try {
        const config = {params: {page, order, orderBy}, headers: {"X-Token": token}};
        const response = await instance.get("/posts", config);
        onSuccess(response.data.data);
    } catch (e) {
        console.log(e);
        onFailure();
    }
};

const getData = async (onSuccess, url, token) => {
    const config = {headers: {"X-Token": token}};
    try {
        const response = await instance.get(url, config);
        onSuccess(response.data.data)
    } catch (e) {
        console.log(e)
    }
};

/**
 *
 * name
 * avatar
 * description
 * id
 */

export const getAuthor = (onSuccess, authorId, token) => getData(onSuccess, `/author/${authorId}`, token);


export const getPostAndComments = (onSuccess, postId, token) =>
    Promise.all([getData(onSuccess("postData"), `/posts/${postId}`, token), getData(onSuccess("comments"), `/posts/${postId}/comments`, token)]);

export const addComment = (postId, token, name, comment ) => {
    const config = {headers: {"X-Token": token}};
    instance.post("/comments", {id: postId, name, comment}, config)
        .then(() => console.log("Comment added"))
        .catch(e => console.log(e));
}