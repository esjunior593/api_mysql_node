const mysql = require("mysql");
var mysqlConexion = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "crud_2019",
multipleStatements: true,

});

mysqlConexion.connect(
    (err) => {
    if(!err){
        console.log("Estoy conectado");
    }
    else{
        console.log("No estoy conectado");
    }}
);

module.exports = mysqlConexion;