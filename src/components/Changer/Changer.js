import React, {useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {showResult} from "../../store/actions";
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    changerBlock: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px',
        alignItems: 'center'
    },
    changerPage: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        height: '450px',
        padding: '20px'
    },
    btn: {
        margin: '10px',
    },
    singleMeme: {
        height: '300px',
        width: 'auto'
    },
    ownMeme: {
        height: '430px',
        width: 'auto'
    },
    memeResult: {
        position: 'relative'
    },
    topText: {
        position: 'absolute',
        margin: '0',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '35px',
        textShadow: '1px 1px 1px #000',
        transform: 'translate(-50%)',
        top: 10,
        left: '50%'
    },
    bottomText: {
        position: 'absolute',
        margin: '0',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '35px',
        textShadow: '1px 1px 1px #000',
        transform: 'translate(-50%)',
        bottom: 10,
        left: '50%'
    },
    buttonBlock: {
        display: 'flex',
        flexDirection: "column"
    },
}));

const Changer = () => {
    const classes = useStyles();
    const singleMeme = useSelector(state => state.singleMeme);
    const show = useSelector(state => state.createMeme);
    const memeText = useSelector(state => state.text);
    const dispatch = useDispatch();
    const [text, setText] = useState({
        topText: '',
        bottomText: '',
    });


    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setText(prevState => {
            return {...prevState, [name]: value};
        });
    };

    const createMeme = () => {
        if (text.topText !== '' || text.bottomText !== '') {
            dispatch(showResult(text));
            setText({
                topText: '',
                bottomText: '',
            });
        }
    };

    let ownMeme = (
        <div className={classes.memeResult}>
            <p className={classes.topText}>
                {memeText?.topText}
            </p>
            <img src={singleMeme?.url} alt={singleMeme?.name} className={classes.ownMeme}/>
            <p className={classes.bottomText}>
                {memeText?.bottomText}
            </p>
        </div>
    );

    return (
        <div className={classes.changerBlock}>
            <Paper elevation={5} className={classes.changerPage}>
                <TextField name='topText'
                           value={text.topText}
                           label="Top Text"
                           variant="outlined"
                           fullWidth
                           onChange={inputChangeHandler}
                />
                {singleMeme ? <img
                    src={singleMeme.url}
                    alt={singleMeme.name}
                    className={classes.singleMeme}
                /> : <p>Choose meme from list</p>}
                <TextField name='bottomText'
                           value={text.bottomText}
                           label="Bottom Text"
                           variant="outlined"
                           fullWidth
                           onChange={inputChangeHandler}
                />
            </Paper>
            <div className={classes.buttonBlock}>
                <Button variant="contained"
                        color="primary"
                        className={classes.btn}
                        onClick={() => createMeme()}
                        disabled={!singleMeme}
                >
                    <ArrowForwardIosIcon/>
                </Button>
            </div>
            <Paper elevation={5} className={classes.changerPage}>
                {show ? ownMeme : null}
            </Paper>
        </div>
    );
};

export default Changer;