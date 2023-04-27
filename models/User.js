const mongoose =require("mongoose");





const UserSchema = new mongoose.Schema(
    {
       

        username: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
            
        },
        firstname: {
            type: String,
            required: false,
            
        },
        lastname: {
            type: String,
            required: false,
            
        },
        
        email: {
            type: String,
            required: true,
            unique: true,
        },

        gender: {
            type: String,
            required: false,
            
        },
        nationality: {
            type: String,
            required: false,
            
        },
        phonenumber: {
            type: String,
            required: false,
            
        },
        document: {
            type: String,
            required: false,
            
        },

        role:{
            type: String,
            enum: ["manager", "user"],
        },

        isManager:{
            type:Boolean,
            default:false

        },
        password:{
            type:String,
            required:true,
        },
        profilePic:{
            type: String,
            default:"",
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

      

