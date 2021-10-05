import React, { useState, useEffect } from "react"
import { setAltaProp } from "../state/formularios"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography'
import style from "./styles/formularios.module.css"

export default function AltaProp() {

    const dispatch = useDispatch()
    const AltaProp = useSelector((state) => state.AltaProp)
    const history = useHistory();
    const [value, setValue] = useState("")
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [ubicacion, setUbicacion] = useState("")
    const [imagen, setImagen] = useState("")

    useEffect(() => {
        dispatch(setAltaProp(value))
    }, [value])

    const handleNombre = (e) => {
        const input = e.target.value;

        if (input) {
            setNombre(input);
        }
    }

    const handlePrecio = (e) => {
        const input = e.target.value;

        if (input) {
            setPrecio(input);
        }
    }

    const handleDescripcion = (e) => {
        const input = e.target.value;

        if (input) {
            setDescripcion(input);
        }
    }

    const handleUbicacion = (e) => {
        const input = e.target.value;

        if (input) {
            setUbicacion(input);
        }
    }

    const handleImagen = (e) => {
        const input = e.target.value;

        if (input) {
            setImagen(input);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(setAltaProp({
            nombre: nombre,
            precio: precio,
            descripcion: descripcion,
            ubicacion: ubicacion,
            imagen: imagen
        })
        )
            .then((data) => {
                setTimeout(function () {
                    history.push("/propiedades");
                }, 2000);
                console.log(data);
            })
            .catch(err => console.log(err))
    };

    return (
        <div className={style.container}>

            < Typography variant="h6" gutterBottom>
                Dar de alta a una Propiedad
      </Typography>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nombre:
          <input type="text" onChange={handleNombre} placeholder="Escribe la direccion" />

                    </label>
                </div>
                <div>
                    <label>
                        Precio:
          <input type="text" onChange={handlePrecio} placeholder="Escribe el precio" />

                    </label>
                </div>
                <div>
                    <label>
                        Descripcion:
          
                        <textarea name="mensaje" for="mensaje" placeholder="describe brevemente en menos de 300 carácteres" onChange={handleDescripcion} ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Ubicacion:
          <input type="text" onChange={handleUbicacion} placeholder="Escribe la ubicacion, ej. Palermo" />

                    </label>
                </div>
                <div>
                    <label>
                        Imagen:
          <input type="text" onChange={handleImagen} placeholder="Escribe la URL " />

                    </label>
                </div>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="inherit"

                >
                    Alta
          </Button>
            </form>
        </div >
    )
}