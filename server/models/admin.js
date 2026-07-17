import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({

    id:{
        type:Number,
        unique:true
    },

    Image:{
        type:String
    },

    Name:{
        type:String,
        required:true
    },

    Gender:{
        type:String
    },

    Dob:{
        type:String
    },

    Role:{
        type:String,
        enum:["Librarian","Assistant"],
        default:"Assistant"
    },

    Password:{
        type:String,
        required:true
    }

}
,{
    collection:"AdminsData"
}
);

export default mongoose.model("Admin",adminSchema);