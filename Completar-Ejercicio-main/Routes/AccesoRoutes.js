const express= require("express")
const rutaAcceso=express.Router()

const AccesoController=require("../controller/AccesoController")
let AccesoC=new AccesoController()

rutaAcceso.post("/registrar",AccesoC.registrarse.bind(AccesoC))
rutaAcceso.post("/login",AccesoC.login.bind(AccesoC))
rutaAcceso.get("/usuario",AccesoC.usuario.bind(AccesoC))
rutaAcceso.delete("/eliminar/:id",AccesoC.eliminar.bind(AccesoC))
rutaAcceso.put("/actualizar",AccesoC.actualizar.bind(AccesoC))

module.exports=rutaAcceso