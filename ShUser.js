const mongoose=require("mongoose")
const UserSh=new mongoose.Schema({
    Name:{
        type: String,
        reqired: true
    },
    Age:{
        type:Number,
        required: true
    }
})
const collection1=mongoose.model("UserDt",UserSh)
module.exports=collection1