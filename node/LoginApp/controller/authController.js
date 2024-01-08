const express = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
const User=require("../models/userModels");
const bodyParser=require("body-parser");
const jwt = require("jsonwebtoken");
var _ = require("lodash");
const config = require("../config");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


console.log("AUTH STARTED")
router.post("/register",function(req,res){
    let hashPass=bcrypt.hashSync(req.body.password,8);
    console.log(hashPass)
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashPass,
        phone: req.body.phone,
        role: req.body.role ? req.body.role : "user",
    },
    (err,data)=>{
        if (err) return res.send("Error while registering user:", err.message);
        res.send("Registration Successful!");
    })

    
    console.log(User)


})



router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) return res.send({ auth: false, token: "Error while logging" });
      if (!user) return res.send({ auth: false, token: "Invalid credentials" });
      else {
        const passIsValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passIsValid)
          return res.send({ auth: false, token: "Invalid credentials" });
        let token = jwt.sign({ id: user._id }, config.secret, {
          expiresIn: 86400, //24 hours -> in sec
        });
        res.send({auth: true, token: token});
      }
    });
  });


router.get("/user", (req,res)=>{
  User.find({},(err,data)=>{
    if(err) throw err,
    console.log(data)
    res.send(data);
   }) 
})

router.get("/userinfo",(req,res)=>{
    let token=req.headers["x-access-token"];
  
    if(!token)res.send({auth:false,token:"TOKEN REQUIRED"});
   
    jwt.verify(token,config.secret,(err,user)=>{
      if(err) res.send({auth:false,token:"INVALID"});
      console.log(user,"hello")
     // const {id}=user._id;
      User.findById(user.id,(err,result)=>{
        console.log(result)
          res.send(result);
      })
  })
   
})

module.exports = router;