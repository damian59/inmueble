// import React from "react"
// import { setRemoveProp } from "../state/formularios"
// import { useSelector, useDispatch } from 'react-redux';
// import { message } from "antd"
// import Propiedades from "./Propiedades"
// export default function BajaProp({ match }) {

//     const dispatch = useDispatch();

//     const remove = useSelector((state) => state.remove)

//     let propId = match.params.id

//     const handleRemoveProp = (propId) => {
//         dispatch(setRemoveProp(propId))
//             .then((data) => {
//                 if (data.error) message.error(`Fallo: ${data.error.message}.`);
//                 else message.success(`Se elimino la Propiedad`);
//             });
//     };

//     return (
//         <div>
//             {Propiedades.map((prop) => (

//                 key = { prop.id }

//                     onChange = { handleRemoveProp }

//             ))}
//         </div>
//     )
// }