let express =require('express');
let app=express();

let BodyParser=require('body-parser');
app.use(BodyParser.json({limit :'10mb'}));


app.get("/", function (req, res, next) {
    fs.readFile("/file-does-not-exist", function (err, data) {
      if (err) {
        next(err); // Pass errors to Express.
        console.log("err readddd");
      }
      else {
        res.send(data);
        console.log("success   readddd");
      }
    });
  });


app.use(function(err,req,res,next){
    res.status(422).send({error:err.message});
});


app.listen(5000,()=>console.log('5000 port started'));