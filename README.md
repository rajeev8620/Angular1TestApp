Step1:
Server settings:
==> Create database:
CREATE DATABASE AngularTestApp; 
==> Create table
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


Step2:
Client Settings:

