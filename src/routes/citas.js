//aqui cramos rutas
const express=require('express');
const router=express.Router();


//aqui haremos la magia
//aqui por esta un nivel abajo
const msqlConnection=require('../database');
//creamos una rutas
//mostrar todas las citas
router.get('/',(req,res)=>{
    msqlConnection.query('SELECT * FROM clientes',(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});
//mostrar solo una citas
router.get('/:id',(req,res)=>{
    msqlConnection.query('SELECT * FROM clientes WHERE id=?',[req.params.id],(err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});




//aqui añadiendo una nueva cita
router.post('/',(req,res)=>{
    const{id,nombre,email,telefono,fecha,sintomas} = req.body;
    console.log(req.body);
    const query=`
        CALL clientesAddorEdit(?,?,?,?,?,?);
    `;
    msqlConnection.query(query,[id,nombre,email,telefono,fecha,sintomas],(err, rows, fields)=>{
        if(!err){
            res.json({Status:"Cliente guardado"});
        }else{
            console.log(err);
        }
    });

});
//aqui eliminamos una cita
router.delete('/:id',(req,res)=>{
    const {id}=req.params;
   msqlConnection.query('DELETE FROM clientes WHERE id=?',[id],(err, rows, fields)=>{
         if(!err){
              res.json({Status:"Cliente eliminado"});
         }else{
              console.log(err);
         }
   });   
    
});

//actualizar la cita
router.put('/:id',(req,res)=>{
    const {id}=req.params;
    const{nombre,email,telefono,fecha,sintomas} = req.body;
    const query=`
        CALL clientesAddorEdit(?,?,?,?,?,?);
    `;
    msqlConnection.query(query,[id,nombre,email,telefono,fecha,sintomas],(err, rows, fields)=>{
        if(!err){
            res.json({Status:"Cliente actualizado"});
        }else{
            console.log(err);
        }
    });
});

    


//exportar routers
module.exports=router;