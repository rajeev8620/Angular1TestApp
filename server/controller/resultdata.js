var mysql = require('mysql');
var dbConnection=require("../config/db");


const saveResult= async(req,res)=>{
  const input = req.body;
  const number1=input.number1;
  const number2=input.number2;
  const result=input.result;
  const myQuery=`INSERT INTO ResultData (ResultId, Number1, Number2, Result, LastModified) 
          VALUES (NULL, '${number1}','${number2}',${result},NOW())`;
      dbConnection.defaultDb.query(myQuery, function(err, rows){
        if(err){
          res.json({
            status:true,
            data:[],
            message:err
          })
        }else{
          res.json({
            status:true,
            data:rows,
            message:"Successfully inserted data!"
          })
        }
      })
}

const getLatestRecord= async (req, res) => {
 const myQuery=`SELECT Number1,Number2,Result FROM ResultData ORDER BY ResultId DESC LIMIT 0,1`;
 dbConnection.defaultDb.query(myQuery, function(err, rows){
  if(err){
      res.json({
      status:false,
      message:err
      })
  }else{
      res.json({
          status:true,
          data:rows,
      })
  }
  })
};


module.exports ={
  getLatestRecord:getLatestRecord,
  saveResult:saveResult
}

