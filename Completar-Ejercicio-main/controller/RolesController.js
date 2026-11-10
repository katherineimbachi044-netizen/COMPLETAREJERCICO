
let conectar = require("../conexion/db");

class RolesController {

    insertar = async (req, res) => {

        let { nombre, descripcion } = req.body;

        let [respuesta] = await conectar.query(
            "INSERT INTO roles(nombre, descripcion) VALUES(?,?)",
            [nombre, descripcion]
        );

        res.json({
            mensaje: "Rol registrado correctamente",
            rol: respuesta
        });
    }

    ver = async (req, res) => {

        let [respuesta] = await conectar.query(
            "SELECT * FROM roles"
        );

        res.json({
            roles: respuesta
        });
    }

    actualizar = async (req, res) => {

        let id = req.params.id;

        let { nombre, descripcion } = req.body;

        let [respuesta] = await conectar.query(
            "UPDATE roles SET nombre = ?, descripcion = ? WHERE id = ?",
            [nombre, descripcion, id]
        );

        res.json({
            mensaje: "Rol actualizado correctamente",
            rol: respuesta
        });
    }

    eliminar = async (req, res) => {

        let id = req.params.id;

        let [respuesta] = await conectar.query(
            "DELETE FROM roles WHERE id = ?",
            [id]
        );

        res.json({
            mensaje: "Rol eliminado correctamente",
            rol: respuesta
        });
    }
}

module.exports = RolesController;
