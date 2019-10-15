const router = require('express').Router();     
const resultdata=require("../controller/resultdata");
  
// Result Details Routing List 
router.post('/saveData',resultdata.saveResult);
router.get('/getData',resultdata.getLatestRecord);

module.exports = router;
