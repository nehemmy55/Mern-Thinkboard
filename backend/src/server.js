const express = require('express');
const notesRoutes =require("./routes/notesRoutes.js");
const {connectDB} = require("./config/db.js");
const dotenv = require('dotenv');

dotenv.config();
console.log(process.env.MONGO_URI);


connectDB();
const app = express();
const PORT = process.env.PORT || 5003;

app.use("/api/notes",notesRoutes);



app.listen(PORT,()=>{
    console.log("Server is running on port:", PORT);
});