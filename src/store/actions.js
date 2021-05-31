import {
    FETCH_MEMES_SUCCESS,
    FETCH_MEMES_FAILURE,
    CHOOSE_MEME,
    SHOW_RESULT,
    CLEAR_MEME,
} from "./actionTypes";
import axios from "axios";

export const fetchMemesSuccess = (data) => {
    return {type: FETCH_MEMES_SUCCESS, data};
};

// const fetchMemesFailure = (error) => {
//     return {type: FETCH_MEMES_FAILURE, error};
// };

export const chooseMeme = (meme) => {
    return {type: CHOOSE_MEME, meme};
};

export const showResult = (text) => {
    return {type: SHOW_RESULT, text};
};

export const clearMeme = () => {
    return {type: CLEAR_MEME};
};
