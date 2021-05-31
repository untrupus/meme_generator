import {
    FETCH_MEMES_SUCCESS,
    CHOOSE_MEME,
    SHOW_RESULT,
    CLEAR_MEME,
} from "./actionTypes";

export const fetchMemesSuccess = (data) => {
    return {type: FETCH_MEMES_SUCCESS, data};
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
