const express = require('express');
const router = express.Router();
const { Category } = require("../models/index")


router.post("/", (req, res, next) => {
    Category.create(req.body)
        .then((categoria) => {
            res.send(categoria)
        })
})

router.put("/:id", (req, res) => {
    let id = req.params.id;
    console.log("ACA ESTA EL BODY", req.body)
    Category.update(req.body, {
        where: {
            id: id
        }
    })
        .then(propiedad => {
            res.send(propiedad)
        })

        .catch(error => console.log(err))
})

router.delete("/:nombre", (req, res, next) => {
    let id = req.params.id;
    Category.findOne({
        where: {
            id: id
        },
    })
        .then((categoria) => {
            categoria.destroy()
                .then(() => {
                    console.log("categoria eliminada")
                    res.send("se elimino tu producto correctamente")
                })
        })
})

module.exports = router