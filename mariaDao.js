const mariadb=require("mariadb");
const config=require("./creds");
const pool=mariadb.createPool(
    config.mariaCreds
);

const getAllStudents=async ()=>{
    let connection;
    let data=new Array();
    try{
         connection=await pool.getConnection();
         const rows=await connection.query("select * from student");
         console.log(rows);
         rows.map((item)=>{
            data.push(item);
         });
    }catch(err){
        console.log(err);
    }finally{
        if(connection) 
            connection.end();
    }
    return data;
}

module.exports.getAllStudents=getAllStudents;