const express = require("express");
const mysqlConexion = require("../conexion");
const Router = express.Router();

Router.get("/", (req, res) => {

    mysqlConexion.query("SELECT * from personas",(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
}
)
module.exports = Router;
