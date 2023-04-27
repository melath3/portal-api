const mongoose =require("mongoose");

const SearchSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
    },
    {timestamps: true }
);

module.exports = mongoose.model("Catagory", SearchSchema);

      

