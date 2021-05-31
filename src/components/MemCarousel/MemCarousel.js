import React, {useEffect, useContext} from 'react';
import {ContextApp} from "../../store/reducer";
import {chooseMeme, clearMeme, fetchMemesSuccess} from "../../store/actions";
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import axios from "axios";

const MemCarousel = () => {
    const classes = useStyles();
    const {state, dispatch} = useContext(ContextApp);

    useEffect(() => {
        const fetchMemes = async () => {
            return await axios.get('https://api.imgflip.com/get_memes');
        };
        fetchMemes().then(response => dispatch(fetchMemesSuccess(response.data.data.memes)));
    }, [dispatch]);

    const choose = (meme) => {
        dispatch(chooseMeme(meme));
        dispatch(clearMeme());
    };

    const memesImages = state.memes.map(meme => {
        return (
            <div key={meme.id}>
                <img src={meme.url}
                     alt={meme.name}
                     className={classes.memImg}
                     onClick={() => choose(meme)}
                />
            </div>
        )
    });

    return (
        <div className={classes.root}>
            <GridList className={classes.gridList}>
                {memesImages}
            </GridList>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '0 auto',
        display: 'flex',
        padding: '10px',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    memImg: {
        height: '180px',
        width: 'auto',
        cursor: 'pointer',
        border: '1px solid #302f2f',
        '&:hover': {
            transform: 'scale(1.2)'
        }
    },
}));

export default MemCarousel;