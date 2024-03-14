const userModel = require("../Models/userModel")
const jwt=require('jsonwebtoken');

const handleUserSignUp=(req,res)=>{
    try{
    userModel.create(req.body).then(() =>{
          res.json({"Message":"Created Successfully"}).status(201);
    }).catch((err) =>{
        res.json({"Message":"This is wrong", err:err}).status(500);
    })
}
catch(err){
           res.json({"Message":"This is wrong", err:err}).status(500);
 
}
}

const handleUserLogin=(req, res)=>{
    let {email} = req.body;  // destruction of object
    try{
    userModel.find({email:email}).then((response)=>{
       
        if(response.length>=1){
            jwt.sign(req.body,process.env.SECRET_KEY,(err, token)=>{
                if(err){
                    res.json({"Message":"This is wrong", err:err}).status(500);
                }
                else{
                    res.json({
                        Message:"Login Successfull",
                        data:req.body,
                        token:token,
                        
                    })
                }
            })
        }
    })
}
catch(err){
    res.json({ Message: "This is wrong", err: err }).status(500);

}
}
const getDetails=(req, res)=>{

}

module.exports={handleUserSignUp, handleUserLogin, getDetails}