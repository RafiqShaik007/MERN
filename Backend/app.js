const express = require('express')
const app = express()

const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/users')

//All Middlewares
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//connection to database
const db_url = 'mongodb://localhost:27017/users'

mongoose.connect(db_url).then(()=>{
    console.log('CONNECTION ESTABLISHED IN PROJECT APP')
})


app.post('/login', async(req, res)=>{
    User.findOne({email: req.body.email}).then((userData)=>{
        if(userData){
            if(req.body.password === userData.password){
                res.send({message:'login successfull', status: 200})
            }
            else{
                res.send({mesage:'please enter your valid password'})
            }
        }
        else{
            res.send({message:'User not Found'})
        }
    })
})

app.post('/register', async(req, res)=>{
    User.findOne({email:req.body.email}).then((userData)=>{
        if(userData){
            //display an error message
            res.send({message:"User already exists"})
        }
        else{
            //add the data
            let userData = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
            })

            userData.save().then(()=>{
                res.send({message:'user registered successfully'})
            }).catch(()=>{
                res.send({message:"user registration failed. Try after sometime"})
            })
        }
    })
})

app.listen(4000, ()=>{
    console.log('APP SERVER IN RUNNING AT PORT 4000')
})
