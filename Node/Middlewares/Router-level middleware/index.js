var express=require('express');
var app=express();

let BodyParser=require('body-parser');
app.use(BodyParser.json({limit :'10mb'}));

app.use('/student',require('./student'));

app.get('/',(req,res)=>{
    res.send(' Go to URL  localhost:5000/student    and enter student details for login.To get details of student use URL localhost:5000/student/name_of_stduent');
});

app.listen(5000,()=>console.log('5000 port started'));
