//coin flip microservice evry time you reload the page it gives heads or tails randomly 
//to start program  click      npm start  in terminal

module.exports=(req,res)=>{
   var  coin=(randomnumber(1000)%2)?'tails':'heads';
    return coin ;
}
function randomnumber(precision){
return Math.floor(Math.random()*precision);
}