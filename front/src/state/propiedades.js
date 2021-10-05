import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios"

export const setPropiedades= createAsyncThunk("SET_PROPIEDADES",()=>{
    
return axios
.get("/api/propiedades")
.then((res)=>res.data)
})

const propieadesReducer= createReducer([],{
    [setPropiedades.fulfilled]:(state, action) => action.payload,
})

export default propieadesReducer