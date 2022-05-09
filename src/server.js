const express=require('express');
const cors=require('cors');
const app=express();

//settings
app.use(
    cors({
        origin: 'http://127.0.0.1:5500',
        credentials: true,
        
    })
)
//PORT es para un sistema si nos da un puerto que no esta en uso
//
app.set('port',process.env.PORT||3000);
//Middlewares funciones que se usan antes de que lleguen las rutas
app.use(express.json());
//Routes 
app.use(require('./routes/citas'));


//Starting Server with express
app.listen(app.get('port'),()=>{
    console.log('Server on port',app.get('port'));

});
//para que nos node error debemos instalar los cors
//npm i cors --save