const express=require('express');
const app=express();
app.get('/hello',(request , response)=>
{
    response.send('hello world again');

});
app.listen(3000);