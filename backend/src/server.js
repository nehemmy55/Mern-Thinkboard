const express = require('express');
const notesRoutes =require("./routes/notesRoutes.js");
const {connectDB} = require("../config/db.js");

connectDB();
const app = express();

app.use("/api/notes",notesRoutes);



app.listen(5003,()=>{
    console.log("Server is running on port 5003");
});