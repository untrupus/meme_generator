import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchMemes, chooseMeme, clearMeme} from "../../store/actions";
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';

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

const MemCarousel = () => {
    const classes = useStyles();
    const memes = useSelector(state => state.memes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMemes());
    }, [dispatch]);

    const choose = (meme) => {
        dispatch(chooseMeme(meme));
        dispatch(clearMeme());
    };

    const memesImages = memes.map(meme => {
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
            <GridList className={classes.gridList} >
                {memesImages}
            </GridList>
        </div>
    );
}

export default MemCarousel;