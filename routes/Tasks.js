const app = require('express');
const router = app.Router();
const User = require("../models/User");
const Task = require("../models/Task");


//CREATE POST
router.post('/', async (req, res, next) => {
    const data = new Task(req.body)

    try {
        const dataToSave = await data.save();

        res.send(dataToSave);
    }
    catch (error) {
        res.status(400).json({ message: error.message })

    }
})

//UPDATE POST
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Task.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//DELETE POST
router.delete("/:id", async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Task.findByIdAndDelete(id)
        res.send(`Document with ${data.title} has been deleted..`)
    }

        catch (err) {
            res.status(500).json(err);

           }


});

//GET POST
router.get("/:id", async (req,res)=>{
    try{
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    }catch (err){
        res.status(500).json(err);
    }
});

//GET ALL POSTS
router.get('/', async (req, res, next) => {
    try {
        const data = await Task.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})



module.exports = router;