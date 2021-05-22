const express=require("express")
const path=require("path")
const app=express();
const fs=require('fs')

const port=8000;






 











//express specific stuff
app.use('/static',express.static('static'))//for serving static files

//pug specigic stuff
app.set('view engine','pug')//set the template engine as pug
app.set('views',path.join(__dirname,'views'))// set the views directory
 


//endpoints//
app.get('/',(req,res)=>{
  res.status(200).render('index.pug')
})

//start the server
app.listen(port,()=>{
    console.log(`application started successfully on port ${port}`)
})
