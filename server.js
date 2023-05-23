// npm init -y
// npm i express
// npm i --save-dev nodemon

const express=require("express")
const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view engine","ejs");
app.use(logger)
app.get("/",(req,res)=>{
    
    res.render("pn1")
})
app.get("/",(req,res)=>{
    
    res.render("pn1")
})

function logger(req,res,next){
     console.log(req.originalUrl)
     next()
}

const UserRouter=require("./routes/user1")
app.use("/user",UserRouter)
app.listen(5000)