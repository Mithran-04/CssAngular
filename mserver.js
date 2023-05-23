const express=require("express")
const app=express()
const User=require("./ShUser");
const mongoose=require("mongoose");
const collection1 = require("./ShUser");
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
mongoose.connect("mongodb://127.0.0.1:27017/MDbn").then(()=>{
    console.log("MongoDb connected")
})

app.get("/",async(req,res)=>{
  try{
       res.sendFile(__dirname+'/public/UserFm.html')
  }catch(err){
   res.send(err)
  }
})

app.post("/",async(req,res)=>{
  try{
    const data={
        Name:req.body.Name,
        Age:req.body.Age
    }
    await collection1.insertMany([data]);
    res.sendFile(__dirname+'/public/UserFm.html')
  }catch(err){
      console.log(err)
  }
})

app.get('/users',async(req,res)=>{
    try{
        res.sendFile(__dirname+'/public/Users.html')
    }catch(err){
       console.log(err)
    }
})

app.get('/UsersD',async(req,res)=>{
    try{
       const data1=await collection1.find()
       console.log(data1)
       res.status(200).send({data:data1})
    }catch{

    }
})

app.listen(5000,()=>{
    console.log("Port connected")
})
