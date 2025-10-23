const express = require('express');

const app = express();



app.get("/api/notes", (req,res)=>{
    // send notes
    res.status(200).send("you got 5 notes");
})


app.post("/api/notes", (req,res)=>{
    // send notes
res.status(201).json({message:"Note created successfully"});
})

app.put("/api/notes/:id", (req,res)=>{
    // send notes
    res.status(200).json({message:"Note updated successfully"});send("you got 5 notes");
})

app.delete("/api/notes/:id", (req,res)=>{
    // send notes
    res.status(200).json({message:"Note deleted successfully"});send("you got 5 notes");
})



app.listen(5003,()=>{
    console.log("Server is running on port 5003");
});