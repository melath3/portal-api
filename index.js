require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 5000;
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json());
app.use(cors());

const authsRoute = require("./routes/Auths");
const userRoute = require("./routes/Users");
const taskRoute = require("./routes/Tasks");
const searchRoute = require("./routes/Searchs");
const multer = require("multer");
const path = require("path");





app.use("/images", express.static(path.join(__dirname,"images")));

const storage =multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null, "images");
    },
    filename: (req, file, cb) =>{
        cb(null, req.body.name);
    },
});

const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res,next) => {
   res.status(200).json("File has been uploaded"); 
});


app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

app.use("/api/auth", authsRoute);
app.use("/api/users", userRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/searchs", searchRoute);








