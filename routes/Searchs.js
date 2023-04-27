const app = require('express');
const router = app.Router();
const Search = require("../models/Search");

router.post("/", async (req,res)=>{
    const newSer = new Search(req.body);
    try{
        const savedSer = await newSer.save()
        res.status(200).json(savedSer);
    }catch (err) {
        res.status(500).json(err);
    }
})

router.get("/", async (req,res)=>{
    try{
        const ser = await Search.find()
        res.status(200).json(ser);
    }catch (err) {
        res.status(500).json(err);
    }
})




module.exports = router;