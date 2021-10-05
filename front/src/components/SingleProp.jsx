import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSingleProp } from "../state/singleProp"
import { Link } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from "./styles/singleProp.module.css"
import ModificarProp from './ModificarProp';
import { setRemoveProp } from "../state/formularios"
import { message } from "antd"
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
export default function SingleProp({ match }) {

    const dispatch = useDispatch()
    const singleProp = useSelector(state => state.singleProp)
    const remove = useSelector((state) => state.remove)
    const history = useHistory();

    const [favorite, setFavorite] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    React.useEffect(() => {
        dispatch(setSingleProp(match.params.id))
    }, [dispatch])

    function selecFavorite() {
        setFavorite(!favorite)
    }

    let propId = match.params.id

    const handleRemoveProp = (propId) => {
        dispatch(setRemoveProp(propId))
            .then((data) => {
                setTimeout(function () {
                    history.push("/propiedades");
                }, 2000);
                console.log(data);
            })
            .catch(err => console.log(err))

    };


    return (
        <div className={styles.container}>
            <Card >
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" >
                            c
          </Avatar >
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={singleProp.nombre}
                    subheader="Abril 14, 2021"
                />
                <CardMedia >
                    <div className={styles.contenedorImg}>
                        <img src={singleProp.imagen} alt="" />
                    </div>
                </CardMedia>

                <CardActions disableSpacing>

                    <IconButton aria-label="add to favorites" className={styles.fav} onClick={selecFavorite} >

                        {!favorite ? <FavoriteBorderIcon className={styles.favorite} /> :
                            <FavoriteIcon className={styles.fav} />}

                    </IconButton>

                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <IconButton

                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Descripcion:</Typography>
                        <Typography paragraph>

                        </Typography>
                        <Typography paragraph>

                        </Typography>
                        <Typography paragraph>

                        </Typography>
                        <Typography>
                            {singleProp.descripcion}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
            <Link to={`/edit/${singleProp.id}`}>
                <Button className={styles.btn}  >
                    Editar
          </Button>
            </Link>

            <Link to={`/propiedades/${singleProp.id}`}>
                <Button className={styles.btn} onClick={() => handleRemoveProp(propId)}  >
                    Borrar
          </Button>
            </Link>


        </div>
    )
}