const express = require("express");
const rutaRoles = express.Router();

const RolesController = require("../controller/RolesController");
let RolesC = new RolesController();

rutaRoles.post("/insertar", RolesC.insertar.bind(RolesC));

rutaRoles.get("/ver", RolesC.ver.bind(RolesC));

rutaRoles.put("/actualizar/:id", RolesC.actualizar.bind(RolesC));

rutaRoles.delete("/eliminar/:id", RolesC.eliminar.bind(RolesC));

module.exports = rutaRoles;