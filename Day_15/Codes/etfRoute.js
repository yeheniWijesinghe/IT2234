const express = require('express')
const router = express.Router()
const ETF = require('../models/ETF')
const {default: mongoose} = require('mongoose')
//const {mongoose} = require('mongoose')

router.get('/', async (req,res)=>{
    try{
        const results = await ETF.find().populate("_id")
        if(results){
            res.status(200).json(results)
        } else{
            res.status(404).send("Sorry, No Data Found !")
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error !")
    }
})




module.exports=router