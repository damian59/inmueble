import React from 'react'
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import Register from '../components/Register'
import Login from "../components/Login"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Propiedades from '../components/Propiedades';
import SingleProp from '../components/SingleProp';
import AltaProp from "../components/AltaProp"
import ModificarProp from "../components/ModificarProp"
import BajaProp from "../components/BajaProp"
import SearchProp from '../components/SearchProp'

export default function Main() {

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/add" component={AltaProp} />
                    <Route exact path="/edit/:id" render={({ match }) => <ModificarProp match={match} />} />
                    <Route exact path="/eliminar/:id" render={({ match }) => <BajaProp match={match} />} />
                    <Route exact path="/propiedades/:id" render={({ match }) => <SingleProp match={match} />} />
                    <Route exact path="/propiedades" component={Propiedades} />
                    <Route exact path="/search/:id" render={({match})=> <SearchProp match={match}/>} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />

                    <Redirect from="/" to="/propiedades" />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )

}