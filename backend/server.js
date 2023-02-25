const app = require('./app')
const {createDatabase} = require('./config/database')
createDatabase();
const server = app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port ${process.env.PORT}`)
    console.log(typeof process.env.JWT_SECRET)
});


process.on('unhandledRejection',()=>{
    console.log("unhandledRejectionerror")
    console.log("shouting down the server ")
    server.close(()=>{
          process.exit(1);
      });
});
