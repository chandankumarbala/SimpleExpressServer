const mysql = require('mysql');
const config=require("./creds");
const connection = mysql.createConnection(
    config.mariaCreds
);
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

const getAllStudents= (result)=>{
    connection.query("select * from student",(err,res)=>{
        if(err){
            console.log(err)
            result(null,err);
            return;
        }
        console.log(res);
        result(null,res);

    });
}

module.exports.getAllStudents=getAllStudents;