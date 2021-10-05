import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { setSearchProp } from "../state/searchProp"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Divider from '@material-ui/core/Divider';
import propiedades from "./Propiedades"
import { Card, Container, makeStyles } from "@material-ui/core"
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent'
import Button from "@material-ui/core/Button";
import styles from "./styles/propiedades.module.css"


export default function SearchProp({ match }) {
    const dispatch = useDispatch()
    const queryProp = useSelector((state) => state.searchProp)
    const queryPropId = match.params.id


    useEffect(() => {
        dispatch(setSearchProp(queryPropId))
    }, [])

    return (
        <div>
            <List >
                <ListItem >
                    <ListItemAvatar>
                        {/* <Avatar src="https://rockcontent.com/es/wp-content/uploads/sites/3/2019/02/o-que-e-produto-no-mix-de-marketing.png" >

                        </Avatar> */}

                    </ListItemAvatar>
                    {/* <ListItemText primary="Producto" />
                    <ListItemText primary="Precio" />
                    <ListItemText primary="Descripcion" />
                    <ListItemText primary="Stock" /> */}

                </ListItem>
                <Divider variant="middle" component="li" />

                {queryProp.length > 0 && queryProp.map(prop => {
                    return (
                        <div key={prop.id}>
                             <Grid container
                                direction="column"
                                justify="center"
                                alignItems="center"
                                // key={propiedades.id}
                                 >
                            <Link to={`/propiedades/${propiedades.id}`}>
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
                                        <h4 className={styles.etiqueta}>Ver mas...</h4>
                                        </Link >

                                    </CardContent>
                                </Card>
                            </Link>
                            </Grid>
                        </div>
                    )
                    // <ListItem key={prop.id}>
                    //     <ListItemAvatar>
                    //         <Avatar alt="" src={prop.imagen} />

                    //     </ListItemAvatar>
                    //     <ListItemText primary={prop.nombre} />
                    //     <ListItemText primary={`$${prop.precio}`} />
                    //     <ListItemText primary={prop.descripcion} />
                    //     <ListItemText primary={prop.ubicacion} />


                    // </ListItem>
                }
                )}
                <Divider variant="inset" component="li" />


            </List>
        </div>
    )
}