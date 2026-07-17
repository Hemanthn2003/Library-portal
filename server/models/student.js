import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
      id:{
        type:Number,
        unique:true
    },

    Image:{
        type:String,
        required:true
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

    Class:{
        type:String
    },

    Subscription:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    }
},
{
    collection:"StudentsData"
}

);
export default mongoose.model("Student",studentSchema);