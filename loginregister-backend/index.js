const express = require('express');
const mongoose =require('mongoose');
const Cors = require("cors");

const app = express();
app.use(Cors());

//cross origin requests
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
      res.setHeader("Access-Control-Allow-Headers", "*"),
      next();
  });


mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

app.use(express.json());

//Routes
app.post("/login", (req, res)=>{
    const {email, password}= req.body
    User.findOne({email: email}, (err, user) =>{
        if (user) {
            if(password === user.password)
            {
                res.send({message : "Login Succesfull",user: user})
            }
            else {
                res.send({message: " Password not match"})
            }
        }
        else {
            res.send({message: " user not registerd"})
        }
    })
})

app.post("/register", async(req, res)=>{
    console.log(req.body)
     const {name, email, password}= req.body
    User.findOne({email: email}, (err, user)=>{
        if(user)
        {
            res.send({message : " User Already Registered"})
        }
        else{
            const user = new User(
                {
                    name,
                    email,
                    password
                })
                user.save(err => {
                    if(err){
                        res.send(err)
                    }
                    else {
                        res.send({message : "Successfully Registered, Login Now"})
                    }
                    
                })
            }
    })  
    
})


//app.use(Router);//
app.listen(4000, ()=>{
    console.log("Be started at port 4000")
})


