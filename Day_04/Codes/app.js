const express = require('express');
const app = express();
const port = 3001;

app.get('/',(req,res)=>{
    res.send('Hello Express JS');
});

app.get('/msg',(req,res)=>{
    res.send('Hello Yeheni!');
});

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});