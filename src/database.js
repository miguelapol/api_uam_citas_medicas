const msql=require('mysql');
//aqui conectamos a la base de datos
const msqlConnection=msql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'citas',
    insecureAuth:true,
    port:3306

});
//exportar msqlConection
msqlConnection.connect(function(err){    
    if(err){
        console.log(err);
        return;
    }else{
        console.log('conectado a la base de datos');
    }
});
module.exports=msqlConnection;