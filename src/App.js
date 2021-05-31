import React, {useReducer} from "react";
import {ContextApp, initialState, reducer} from "./store/reducer";

import Header from './components/Header/Header';
import MemCarousel from "./components/MemCarousel/MemCarousel";
import Changer from "./components/Changer/Changer";

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContextApp.Provider value={{dispatch, state}}>
            <div className="App">
                <Header/>
                <MemCarousel/>
                <Changer/>
            </div>
        </ContextApp.Provider>
    );
}

export default App;
