
var student =require('./s.json');
var router =require('express').Router();

router.get('/:name',(req,res)=>{
    console.log(req.params.name)
    res.json(student.find(x=>x.name==req.params.name));
});

router.post('/',validator, (req,res)=>{
  let body=req.body;
  let index=student.findIndex(x=>(x.name==body.name)&&(x.password==body.password))
  if(index===-1){
    res.send('entered details doesnot match (can not login)');
  }
  else {
      res.json(body.name);
  }
 
});

function validator(req,res,next){
   if(typeof(req.body.password)==='number'){
    next();
   }
   res.send("validation error : password not a number");
}

module.exports=router;


