import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setPropiedades } from "../state/propiedades"
import { Card, Container, makeStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from "@material-ui/core/Button";
import styles from "./styles/propiedades.module.css"




export default function Propiedades() {
    
    const dispatch = useDispatch()
    const propiedades = useSelector((state) => state.propiedades)
    const [value, setValue] = useState("")

    useEffect(() => {
        dispatch(setPropiedades());
    }, []);

    return (
        <div >

            <React.Fragment>

                <div className={styles.container}>
                    {propiedades.length > 0 &&
                        propiedades.map((propiedades) => (
                            <Grid container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                key={propiedades.id} >

                                <Card >
                                    <Link to={`/propiedades/${propiedades.id}`}>
                                        <CardMedia >

                                            <img src={propiedades.imagen} alt="" />

                                        </CardMedia>
                                    </Link>

                                    <CardContent  >
                                        <Link to={`/propiedades/${propiedades.id}`}>
                                            <Button size="small" color="inherit" variant='text' >
                                                {propiedades.nombre}
                                            </Button>
                                       
                                        <hr />

                                        <Button size="small" color="inherit" variant='text' >
                                            ${propiedades.precio}
                                        </Button>

                                        <hr/>

                                        <Button size="small" color="inherit" variant='text' >
                                            Ver mas...
                                        </Button>
                                        </Link >

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}

                </div>
            </React.Fragment>

        </div >
    )
}