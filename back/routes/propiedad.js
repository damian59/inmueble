const express = require("express")
const router = express.Router()
const {Propiedades}  = require("../models")
const { Op } = require("sequelize")

router.get("/",(req, res)=> {
    Propiedades.findAll()
        .then(propiedades => {
            res.send(propiedades)
        })
        .catch(err=>console.log(err))

});

router.get("/:id", (req, res) => {
    let id = req.params.id

    Propiedades.findByPk(id)
    .then(producto => { res.send(producto) })
    .catch (error =>console.log(err))
})

router.get("/search/:query", (req, res) => {
    let query = req.params.query
    console.log(query)
        Propiedades.findAll({
        where:{
            nombre:{
                [Op.substring]:query
            }
        }
    })
    .then(propiedad => { res.send(propiedad) })
    .catch (err =>{
        console.log(err)
    })
})

router.post("/add",(req, res)=>{
    console.log("ACA ESTA EL BODY", req.body)
    Propiedades.create(req.body)
    .then(propiedad=>{
        res.send(propiedad)
    })
    
} )

router.put("/:id",(req,res)=>{
    
    let id = req.params.id;
    console.log(req.body)
    Propiedades.findByPk(id)
        .then(data => {
            // console.log("DATAAAAAAA", data)
            !data ? res.sendStatus(404) :
                data.update(req.body)
                    .then(data => res.send(data))
        })
        .catch (error =>{
            console.log(error)
        })
})

router.delete("/:id",(req, res)=>{
    Propiedades.destroy({
        where:{
            id: req.params.id
        }
    })
    .then(()=>{
        res.send("Propieda borrada")
    })
})

module.exports = router