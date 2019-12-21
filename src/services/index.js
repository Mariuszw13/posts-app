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

const { ASCENDING } = ORDER;
const { TITLE } = SORTING_OPTIONS;

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

/**
 *
 * name
 * avatar
 * description
 * id
 */

export const getAuthor = (onSuccess, authorId, token) => {
    const config = {headers: {"X-Token": token}};
    instance.get(`/author/${authorId}`, config)
        .then(response => {
            onSuccess(response.data.data)
        })
        .catch(e => {
            console.log(e)
        })
}