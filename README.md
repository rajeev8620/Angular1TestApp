======================DATABASE SETUP===============================
Create Database: CREATE DATABASE AngularTestApp;
Create Table:
CREATE TABLE `ResultData` (
  `ResultId` int(3) NOT NULL,
  `Number1` int(11) NOT NULL,
  `Number2` int(11) NOT NULL,
  `Result` bigint(20) NOT NULL,
  `LastModified` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
ALTER TABLE `ResultData`
ADD PRIMARY KEY (`ResultId`);
ALTER TABLE `ResultData`
MODIFY `ResultId` int(3) NOT NULL AUTO_INCREMENT;
======================NODE REST API SETUP===============================
Node environment setup:
1. mkdir server
2. cd server
3. npm init
4. npm install express --save
5. npm install body-parser --save
5. npm install cluster --save
6. npm install mysql --save
======================NODE TESTING SETUP===============================
For testing need to install below npm modules:
7. npm i --global mocha
8. npm i --save-dev mocha
9. npm i --save-dev chai
10. npm i chai-http --save
To set database credentials: go to config/db.js, and update all database realted credentials.
Default setting for datebase:
user: root,
host:localhost,
password:password
To modify port number, need to go to config/config.js" and change port number, default it's calling port number:3000.

To Run the server need to run the command "node app.js" in side root folder.
For testing the server need to run "npm test" command in side root folder.
All testing code is there inside test folder.

======================CLIENT SETUP===============================
1. To run the UI, need to go to client folder and run index.html.
2. For UI purpose I have used bootstrap css (version:4.0.0), angularjs(version:1.6.9).
3. For testing purpose added mocha,chai,angular-mocks,sinon,angular and jquery cdn libraries into test/test.html page.
4. To run unit testing need to run test/test.html

