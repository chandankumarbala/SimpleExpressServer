const express=require('express');
const server= express();
const port=8080;


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

server.listen(port,()=>{
    console.log(`This is sample Express server , connect using: http://localhost:8080/`);
});