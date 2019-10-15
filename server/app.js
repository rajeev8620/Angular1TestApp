var express = require('express');
const app = express();

/*
A single instance of Node.js runs in a single thread. 
To take advantage of multi-core systems the user will 
sometimes want to launch a cluster of Node.js processes 
to handle the load. The cluster module allows easy 
creation of child processes that all share server ports
*/
var cluster=require("cluster");
if(cluster.isMaster){
  //first we need to find how many cpu cycle we have
  var cpus=require("os").cpus().length;
  for(var i=0;i<cpus;i++){
    cluster.fork();
  }
  cluster.on('online',function(worker){
    console.log("online :"+worker.process.pid);
  })

  cluster.on('exit',function(worker,code,single){
    console.log("Exited process: "+worker.process.pid);
    cluster.fork();
  })
}else{
  const config=require("./config/config");

  //body-parser extract the entire body portion of an incoming request stream and exposes it on req.body or req.params
  var bodyParser = require('body-parser');
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());

  //enable CORS, to give outside access
  app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
  });
  
  /*=======Result Routes====Start=====================*/
  app.use('/', require('./routes/resultdata'));
  /*=======Result Routes====End=====================*/
  
  //add server port listener  
  const port=config.port;
  app.listen(port,function(){
      console.log('Server started, listening to port: ',port)
  })

  //catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  module.exports = app;

}

