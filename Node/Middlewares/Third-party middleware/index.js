let express =require('express');
let morgan=require('morgan');

let app=express();

let BodyParser=require('body-parser');//body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
app.use(BodyParser.json({limit :'10mb'}));


app.use(morgan('tiny'));//consoles - The minimal output.

app.post('/',(req,res)=>{
    res.send(req.body);
    console.log(req.body);
});

app.listen(5000,()=>console.log('5000 port started'));  