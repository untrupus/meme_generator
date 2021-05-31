import {
    FETCH_MEMES_SUCCESS,
    FETCH_MEMES_FAILURE,
    CHOOSE_MEME,
    SHOW_RESULT,
    CLEAR_MEME,
} from "./actionTypes";

const initialState = {
    memes: [],
    fetchMemesError: null,
    singleMeme: null,
    createMeme: false,
    text: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MEMES_SUCCESS:
            return {...state, memes: action.data, fetchMemesError: null};
        case FETCH_MEMES_FAILURE:
            return {...state, fetchMemesError: action.error};
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

export default reducer;