//Entry file
//const express =  require('express')
import express, { response } from 'express';
import { userRoutes } from './routes/ide-routes';
const app = express();
app.use(express.json());//JSON data fetch next 
app.use('/',userRoutes);
//app.use('/',ideRoutes);
//Last Middleware(404)
app.use((request, response, next)=>{
     response.json({message:'Invalid URL'});
})
const server=app.listen(1234,(arr)=>{
    if(err){
    console.log('Server crash',err);
    }
    else{
        console.log('Server up and running ', server.address);
    }
}) 