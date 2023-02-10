module.exports = funcAsync =>(req,res,next)=>{
     console.log("error 1- ")
    Promise.resolve(funcAsync(req,res,next)).catch(next);
} ;