const express = require("express");
const router = express.Router()
const jwt = require("jsonwebtoken")
const { User } = require('../models/index')

router.post("/register", (req, res, next) => {

    User.create(req.body)
        .then((user) => {
            res.status(201).send(user)
        })
        .catch(err => console.log(err))
});

router.post('/login', (req, res) => {
    const { email, password } = req.body
    
    User.findOne({
        where: {
            email,
        }
    }).then((user) => {
        if (!user) {
            return res.status(400).send("usuario inexistente")
        }
        if (!user.validPassword(password)) {
            return res.status(401).send("invalid credentials")
        }
        const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, "propiedades")
        return res.status(200).json({ token })
    })
        .catch(err => console.log(err))
})


module.exports = router