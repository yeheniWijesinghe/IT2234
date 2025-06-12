const express = require('express')
const router = express.Router()
const User = require('../models/User')
const {mongoose} = require('mongoose')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const secretkey = "vau.phy@2025"

router.post('/register', async(req,res)=>{
    try{
        let{username,email,password} = req.body
        if(!username || !email || !password){
            return res.status(400).send("Please provide the required fields!")
        }
        if(await User.findOne({username})){
            return res.status(400).send("Username already available!")
        }

        //hashing for the password
        const salt = await bcrypt.genSalt()
        password = await bcrypt.hash(password,salt)


        const results = await User.create({username,email,password})
        return res.status(200).json(results)
    }

    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

router.post('/login', async(req,res)=>{
    try{
        let{username,password} = req.body
        if(!username || !password){
            return res.status(400).send("Please provide the required fields!")
        }

        //check username
        const user = await User.findOne({username})
        if(!user){
            return res.status(400).send("Please check your username and password!")
        }

        //check password
        const passMatch = await bcrypt.compare(password,user.password)
        if(!passMatch){
            return res.status(400).send("Please check your username and password!")
        }

        //create token
        const playload = {ID:user._id,NAME:username}

        //encryption
        const token = jwt.sign(playload,secretkey)
        return res.status(200).json({token,playload})
        //return res.status(200).json(token)
    }

    catch(error){
        console.error(error);
        res.status(500).send("Server Error!")
    }
})

module.exports = router