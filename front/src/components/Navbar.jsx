import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import  { Link, useHistory } from "react-router-dom"; 
import SearchIcon from "@material-ui/icons/Search"
import InputBase from "@material-ui/core/InputBase"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    navbar: {
        backgroundColor: '#008b8b',
    },
    logo: {
        height: "80px",
        paddingRight: "150px",
    },
    icon: {
        fontSize: "24px",
    },
    title: {
        flexGrow: 1,
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#ffffff',
        "&:hover": {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        color: "black",
    },
    log: {
        color: "black",
        display: "flex",
        fontSize: "25px",
        fontFamily: "'Lobster', cursive",
        position: "relative",
        alignItems: "center"
    },

    inputRoot: {
        color: "black",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "50ch",
        },
    },
    sectionDesktop: {
        display: "none",
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
        width: "60",
    },
    sectionMobile: {
        display: "flex",
        [theme.breakpoints.up("md")]: {
            display: "none",
        },
    },
}))

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState("");
    const history = useHistory();

    const enter = (e) => {
        if (e.keyCode == "13") {
          history.push(`/search/${value}`);
          setValue("");
        }
      };


    return (
        <div className={classes.grow}>
            <AppBar position="static" className={classes.navbar} >
                <Toolbar>
                    <div>

                        <Link to='/add'>
                            {/* <img className={classes.logo} src="" alt="" /> */}

                            <Button variant="text" color="inherit">Agregar</Button>
                        </Link>
                    </div>
                    
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Buscar..."
                            onKeyDown={(e) => enter(e)}
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>
                    <div>





                        <Link to="/login">
                            <Button variant="text" color="inherit">Ingresar</Button>

                        </Link>


                    </div>

                </Toolbar>
            </AppBar>
        </div >
    )
}