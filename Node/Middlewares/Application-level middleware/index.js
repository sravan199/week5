let express =require('express');
let details=require('./details.json');
let app=express();

let BodyParser=require('body-parser');
app.use(BodyParser.json({limit :'10mb'}));

app.get('/',(req,res)=>{
    res.send(details);
});

app.get('/:id',(req,res)=>{
        console.log(req.params.id);
        let index=details.findIndex(x=>(x.id==req.params.id))
        if(index===-1){
            res.send('user not defined');
         }
        else {
        res.json(details[index]);
    }
  });


app.post('/',validator, (req,res)=>{
  let body=req.body;
  let index=details.findIndex(x=>(x.name==body.name))
  if(index===-1){
      details.push(body);
      res.json(body.name);
  }
  else {
      res.send('user exist');
  }
});


function validator(req,res,next){
   if((typeof(req.body.id)==='number')&&(typeof(req.body.section)==='number')&&(typeof(req.body.name)==='string')){
    next();
   }
   console.log(typeof(req.body.id),typeof(req.body.section),typeof(req.body.name));
    res.send("validation error : details are in wrong type or full details not mentioned. name : string ,id : number ,section : number ");
}

app.listen(5000,()=>console.log('5000 port started'));