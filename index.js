const express=require('express');
const mariaDao=require("./mariaDao");
const mysqlDao=require("./mysqlDao");
const server= express();
const port=3000;


server.get('/',(req,resp)=>{
    let homepageResponse={};
    homepageResponse.page="home";
    homepageResponse.serverName="SimpleExpress";
    resp.send(homepageResponse);
});

server.get('/ng',(req,resp)=>{
    let angularRest={};
    angularRest.page="angularRestEndpoint";
    angularRest.serverName="SimpleExpress";
    resp.send(angularRest);
});


server.get('/allStudentsMaria',async (req,res)=>{
    let data=await mariaDao.getAllStudents();
    console.log("data fetched >>"+ JSON.stringify(data));
    res.send(data);
});

server.get('/allStudents1Mysql',(req,res)=>{
    mysqlDao.getAllStudents((err,data)=>{
        if(err){
            res.status(500).send({
                message:
                  err.message || "Some error occurred while retrieving customers."
              });
        }
        else
        res.send(data);
    });
});


server.listen(port,()=>{
    console.log(`This is sample Express server , connect using: http://localhost:`+port+`/`);
});