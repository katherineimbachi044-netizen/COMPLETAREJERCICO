let conectar = require("../conexion/db");
let bcrypt=require("bcrypt")

class AccesoController{

    login=async(req,res)=>{

        let {correo,passwords}=req.body

        let [respuesta]=await conectar.query(
            "SELECT * FROM Usuarios WHERE correo=?",
            [correo]
        )

        console.log(respuesta)

        if(respuesta.length==0){
            return res.json({
                mensaje:"usuario no encontrado"
            })
        }

        let validar= await bcrypt.compare(passwords,respuesta[0].passwords)

        if(validar){
            return res.json({
                mensaje:"logeo correcto"
            })
        }
        else{
            return res.json({
                mensaje:"contraseña incorrecta"
            })
        }
    }

    registrarse= async(req,res)=>{

        // hash=> encriptacion contraseñas
        //12345678=>mdbcwkdvgdvsbdcbdvbdvsbvb

        let {nombre,apellido,direccion,telefono,correo,passwords}=req.body

        let contrasena= await bcrypt.hash(passwords,10)

        let respuesta=await conectar.query(
            "INSERT INTO Usuarios(nombre,apellido,direccion,telefono,correo,passwords) VALUES(?,?,?,?,?,?)",
            [nombre,apellido,direccion,telefono,correo,contrasena]
        )

        console.log(respuesta)

        res.json({
            mensaje:"usuario registrado correctamente",
            usuario:{
                nombre:nombre,
                apellido:apellido,
                direccion:direccion,
                telefono:telefono
            }
        })
    }

    usuario=async(req,res)=>{
        let [respuesta] = await conectar.query("SELECT id, nombre, apellido, direccion, telefono correo FROM Usuarios")
        res.json({
            usuario:respuesta
        })
    }
    eliminar = async (req, res) => {
        let id = req.params.id

        let [respuesta] = await conectar.query(
            "DELETE FROM Usuarios WHERE id = ?",
            [id]
        )

        res.json({
            mensaje: "Usuario eliminado correctamente",
            usuario: respuesta
        })
    }

        actualizar = async (req, res) => {
        let id = req.params.id

        let { nombre, apellido, direccion, telefono, correo } = req.body

        let [respuesta] = await conectar.query(
            "UPDATE Usuarios SET nombre = ?, apellido = ?, direccion = ?, telefono = ?, correo = ? WHERE id = ?",
            [nombre, apellido, direccion, telefono, correo, id]
        )

        res.json({
            mensaje: "Usuario actualizado correctamente",
            usuario: respuesta
        })
    }
}

module.exports=AccesoController