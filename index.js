const http = require("http")
const express = require("express")

const app = express()



// -------Get Method--------

app.get("/get",(req,res)=>{
res.send("This is Get method")
})






//  -------Post Method--------

app.post("/post",(req,res)=>{
    res.send("This is Post method")
    })


    

//  -----Put Method--------

app.put("/put",(req,res)=>{
    res.send("This is Put method")
    })





    
//  -------Delete Method--------

app.delete("/delete",(req,res)=>{
    res.send("This is Delete method")
    })
    





app.listen(2222,()=>{
    console.log("My app is running")
})