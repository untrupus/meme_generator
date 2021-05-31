import {
    FETCH_MEMES_SUCCESS,
    FETCH_MEMES_FAILURE,
    CHOOSE_MEME,
    SHOW_RESULT,
    CLEAR_MEME,
} from "./actionTypes";
import axios from "axios";

const fetchMemesSuccess = (data) => {
    return {type: FETCH_MEMES_SUCCESS, data};
};

const fetchMemesFailure = (error) => {
    return {type: FETCH_MEMES_FAILURE, error};
};

export const fetchMemes = () => {
    return async dispatch => {
        try {
            const response = await axios.get('https://api.imgflip.com/get_memes');
            dispatch(fetchMemesSuccess(response.data.data.memes));
        } catch (e) {
            dispatch(fetchMemesFailure(e));
        }
    }
};

export const chooseMeme = (meme) => {
    return {type: CHOOSE_MEME, meme};
};

export const showResult = (text) => {
    return {type: SHOW_RESULT, text};
};

export const clearMeme = () => {
    return {type: CLEAR_MEME};
};
