import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios"

export const setSingleProp= createAsyncThunk("SET_PROPIEDAD", (propId)=>{
    console.log("ESTAMOS EN EL AXIOS")
    return axios
    .get(`/api/propiedades/${propId}`)
    .then(res=> res.data)
})

const setSinglePropReducer= createReducer({},{
    [setSingleProp.fulfilled]: (state, action) => action.payload,
})

export default setSinglePropReducer