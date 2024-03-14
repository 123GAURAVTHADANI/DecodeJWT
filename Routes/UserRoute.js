var express= require('express');
const { handleUserSignUp, handleUserLogin, getDetails } = require('../Controller/UserController');
const verify = require('../Middleware/verifyMiddleware');
var router=express.Router();


router.post('/signUp', handleUserSignUp)
router.post('/login', handleUserLogin)
router.get('/getDetails',verify,getDetails)

module.exports=router;