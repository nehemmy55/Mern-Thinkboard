const express = require('express');
const{ createNote, getAllNotes, updateNote, deleteNote } =require('../controllers/notesController.js');

const router = express.Router(); 

router.get("/", getAllNotes);
router.post("/", createNote)             
router.put("/:id",updateNote) 
router.delete("/:id",deleteNote)
        
    
module.exports= router;