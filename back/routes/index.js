const express= require("express");
const router = express.Router();

const propiedadRouter= require("./propiedad");
const userRouter= require("./user");

router.use("/propiedades", propiedadRouter);
router.use("/user", userRouter);


module.exports = router