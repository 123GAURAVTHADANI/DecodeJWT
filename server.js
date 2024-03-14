var express=require('express');
var app=express();
var dotenv=require('dotenv');
const router = require('./Routes/UserRoute');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


mongoose.connect('mongodb+srv://garvthadani:123Gaurav@cluster0.sa0jbba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    // string options
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("connected to db")
})

app.use('/api/v1/user',router);  // router middleware 

app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`)
})




// http://localhost:portnumber/api/v1/user/signUp
// http://localhost:portnumber/api/v1/student/signUp


// packages :- npm i body-parser  nodemon jsonwebtoken express mongoose

/* ENV
PORT=5002
SECRET_KEY="123Gaurav"
*/