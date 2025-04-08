const express = require('express');
const app = express();
const port = 3003;

const studentRoute=require('./student/studentroute')

app.use(express.json())
app.use('/student',studentRoute)

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});