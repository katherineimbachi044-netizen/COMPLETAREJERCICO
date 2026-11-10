let express=require("express")
let cors = require("cors")
let PORT =7000


const app=express()

const RolesRoutes = require("./Routes/RolesRoutes");
const AccesoRoutes=require("./Routes/AccesoRoutes")

app.use(express.json())
app.use(cors())

app.use("/apiRegistrar",AccesoRoutes)
app.use("/apiRoles", RolesRoutes);

app.listen(PORT,()=>{
    console.log("servidor ejecutandoce"+PORT)
})