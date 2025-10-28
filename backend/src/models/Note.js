const mongoose = require('mongoose');

//ceate schema
const noteSchema =  new mongoose.Schema (
    {
        title:{
            type:String,
            required:  true,
        },
        content:{
            type:String,
            required:true,
        },
    },
        { timestamps: true}

);
// create model bassed on schema
const Note = mongoose.model("Note",noteSchema)
module.exports=Note;