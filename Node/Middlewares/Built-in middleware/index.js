let express =require('express');
let details=require('./details.json');
let app=express();

app.use(express.json());
app.use(express.urlencoded({extended :true}));

app.get('/',(req,res)=>{
    res.send(details);
});

app.post('/', (req,res)=>{
  let body=req.body;
  console.log(body);
  let index=details.findIndex(x=>(x.name==body.name))
  if(index===-1){
      details.push(body);
      res.json(body);
  }
  else {
      res.send('user exist');
  }
});

app.listen(5000,()=>console.log('5000 port started'));