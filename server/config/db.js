var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({    
    host: 'cs209.cwgblr.com',
    user: 'root',
    password: 'cellworks',
    database: 'AngularTestApp'
});



module.exports={
    defaultDb:connection,
};
