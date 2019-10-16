var mysql = require('mysql');

// Add the credentials to access your database
var connection = mysql.createConnection({    
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'AngularTestApp'
});



module.exports={
    defaultDb:connection,
};
