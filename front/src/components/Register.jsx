import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { setRegister } from "../state/user"

import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";



const useStyles = makeStyles((theme) => ({
    body: {
        backgroundColor: '#deb887',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: "#C25500",
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#C25500",
    },
    tipo: {
        fontWeight: "bold",
        fontFamily: "'Lobster Two', cursive",
        fontSize: "30px",
    },
    image: {
        backgroundImage:
            "url(https://i.pinimg.com/originals/82/c3/ee/82c3ee2a09281581500a1cbbccdb5d8e.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundColor:
            theme.palette.type === "light"
                ? theme.palette.grey[50]
                : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "rigth",
    },

    root: {
        height: "100vh",
    },
}));

const Register = () => {

    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const classes = useStyles();
    const history = useHistory();

    const register = useSelector((state) => state.register)

    useEffect(() => {
        dispatch(setRegister(value))
    }, [value])


    const handleEmail = (e) => {
        const input = e.target.value;

        if (input) {
            setEmail(input);
        }
    }
    const handlePassword = (e) => {
        const input = e.target.value;

        if (input) {
            setPassword(input);
        }
    }
    const handleName = (e) => {
        const input = e.target.value;

        if (input) {
            setName(input);
        }
    }
    const handleLastName = (e) => {
        const input = e.target.value;

        if (input) {
            setLastName(input);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(setRegister({
            email: email,
            password: password,
            name: name,
            lastName: lastName
        })
        )
            .then(() => {
                console.log("te has registrado")
            })
            .catch(err => console.log(err))
    };

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    {/* <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography component="h1" variant="h5" className={classes.tipo}>
                        Registrarse
        </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Nombre"
                                    autoFocus
                                    onChange={handleName}
                                />
                            </Grid>
                            <Grid item xs={10} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Apellido"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={handleLastName}
                                />
                            </Grid>
                            <Grid item xs={10}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Correo electrónico"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleEmail}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Contraseña"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={handlePassword}
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="inherit"
                            className={classes.submit}
                        >
                            Registrarme
          </Button>
                        <Grid container justify="center">
                            <Grid item>
                                Ya tienes una cuenta?
              <Link to="/login" variant="body2">
                                    Ingresar
              </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>

            </Grid>
        </Grid>
    );

}
export default Register;