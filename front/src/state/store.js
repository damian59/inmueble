import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";

import removePropReducer from "./formularios";
import altaPropReducer from "./formularios";
import editPropReducer from "./formularios"
import propieadesReducer from "./propiedades";
import searchPropReducer from "./searchProp";
import setSinglePropReducer from "./singleProp";
import userReducer  from "./user"



const store = configureStore({
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger),
    reducer:{
        user: userReducer,
        propiedades: propieadesReducer,
        singleProp: setSinglePropReducer,
        searchProp: searchPropReducer,
        altaProp: altaPropReducer,
        modificarProp: editPropReducer,
        removeProp: removePropReducer,
    }
})

export default store;