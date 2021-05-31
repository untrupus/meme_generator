import React from "react";
import {
    FETCH_MEMES_SUCCESS,
    CHOOSE_MEME,
    SHOW_RESULT,
    CLEAR_MEME,
} from "./actionTypes";

export const ContextApp = React.createContext();

export const initialState = {
    memes: [],
    singleMeme: null,
    createMeme: false,
    text: null,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case FETCH_MEMES_SUCCESS:
            return {...state, memes: action.data, fetchMemesError: null};
        case CHOOSE_MEME:
            return {...state, singleMeme: action.meme};
        case SHOW_RESULT:
            return {...state, createMeme: true, text: action.text};
        case CLEAR_MEME:
            return {...state, createMeme: false, text: null};
        default:
            return state;
    }
};

