import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios"

export const setSearchProp= createAsyncThunk("SEARCH_PROP", (value)=>{
    return axios
    .get(`http://localhost:3001/api/propiedades/search/${value}`)
    .then(res=>res.data)
})

const searchPropReducer= createReducer([],{
    [setSearchProp.fulfilled]:(state, action) => action.payload,
})

export default searchPropReducer