const express=require("express")
const router=express.Router()

router.get('/',(req,res)=>{
    
    res.render("vn1",{text:"hey"})
})
router.post("/",(req,res)=>{

    res.send(`Post request sent ${req.body.Name}`)
})

router.get("/new",(req,res)=>{
    res.render("form")
})

router.route("/:id")
.get((req,res)=>{
    console.log(us)
  res.send(`hello id ${req.params.id}`)
}).delete((req,res)=>{

})
//param is middleware
router.param("id",(req,res,next,id)=>{
    us="Newww"
    console.log(id);
    next()
})
module.exports=router