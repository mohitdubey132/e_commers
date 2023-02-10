const app = require('./app')
const {createDatabase} = require('./config/database')
createDatabase();
server = app.listen(process.env.PORT,()=>{
    console.log(`server is listening on port ${process.env.PORT}`)
});
process.on('unhandledRejection',()=>{
    console.log("unhandledRejectionerror")
    console.log("shouting down the server ")
    server.close(()=>{
          process.exit(1);
      });
});