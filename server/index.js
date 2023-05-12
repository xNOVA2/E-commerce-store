const express  = require('express')
const data = require('./Connection/Connection');
const cors = require('cors')
const app = express();


app.use(cors());

app.get('/',(req,res)=>{
    data.query("SELECT * FROM Products",(err,result)=>{
        
       
    if(err){
        return res.send(err).status(400);
    }
        else{
            res.status(200).send(result)
        }
    })
})

app.get('/Product/:id',(req,res)=>{
    const id = req.params.id;
    data.query('SELECT * FROM Products WHERE id = ? ',[id],(err,result)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.send(result).status(201);
        }
    })
})

app.listen(4000,()=>{
    console.log("SERVER UP AND RUNNING");
})