const express = require('express');

const router = express.Router(); 

router.get("/", (req,res)=>{
    res.status(200).send("you fetched  5 notes");
})
router.post("/", (req,res) =>{
    // create  notes
    res.status(201).json({message:"Note created successfully"});
})
       
        
 router.put("/:id", (req,res)=>{
        // update notes
        res.status(200).json({message:"Note updated successfully"});
 })
    
router.delete("/:id", (req,res)=> {
    res.status(200).json({ message:"Note deleted successfully"});
})
    
    
    
module.exports= router;