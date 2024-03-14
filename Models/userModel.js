var mongoose=require('mongoose');

var UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{timestamps:true})

const userModel=mongoose.model('pwskilluser',UserSchema);
module.exports=userModel;