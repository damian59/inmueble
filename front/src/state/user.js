import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios"

export const setRegister = createAsyncThunk("SET_REGISTER", (user, thunkAPI) => {
    console.log("ESTAMOS EN EL AXIOS", user)
    return axios
        .post('/api/user/register' , {email:user.email, password:user.password,name:user.name,lastName:user.lastName })

        .then((res) => {
            console.log("RES", res.data);
            return res.data
        });
});




export const setLogin = createAsyncThunk("SET_LOGIN", (user,thunkAPI) => {
    return axios.post("api/user/login",{email:user.email,password:user.password})
    .then((res)=> 
 
    res.data )
  });

const userReducer = createReducer({}, {
    [setRegister.fulfilled]: (state, action) => action.payload,
    [setLogin.fulfilled]: (state, action) => action.payload,

})

export default userReducer