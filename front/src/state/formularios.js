import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios"

//  ACCION

export const setAltaProp = createAsyncThunk("SET_ALTA", (propiedades)=>{
    return axios
    .post("http://localhost:3001/api/propiedades/add",{
        nombre:propiedades.nombre,
        precio:propiedades.precio,
        descripcion:propiedades.descripcion,
        ubicacion:propiedades.ubicacion,
        imagen:propiedades.imagen
    })
    .then(res => res.data)
}
)

export const setRemoveProp = createAsyncThunk("SET_REMOVE",(propId)=>{
    return axios
    .delete(`http://localhost:3001/api/propiedades/${propId}`)
    .then(res => res.data)
})

export const setEditarProp = createAsyncThunk("SET_EDITAR",({propId,propiedad})=>{
    console.log("ESTAMOS EN EL AXIOS", propiedad )
    return axios
    .put(`http://localhost:3001/api/propiedades/${propId}`,propiedad)
       
    .then(res => res.data)
})


// REDUCER

const altaPropReducer= createReducer([],{
    [setAltaProp.fulfilled]:(state, action) => action.payload,
})

export const  removePropReducer=([],{
    [setRemoveProp.fulfilled]:(state, action)=> action.payload,
})

export const editPropReducer= createReducer({},{
    [setEditarProp.fulfilled]:(state, action) => action.payload
})

export default altaPropReducer




