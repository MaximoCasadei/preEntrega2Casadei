// conexion mongo bd

const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://maxi333:Soycanalla2004@cluster0.ux8vavg.mongodb.net/ecommerce?retryWrites=true&w=majority")
    .then(() => console.log("conectado!"))
    .catch(() => console.log("error en conexion a BD"))