import Student from "../models/student.js";


export const getStudents = async (req , res)=>{
    try{
        const students= await Student.find();
        res.status(200).json(students);
    
    }catch(err){
        res.json(err);
    }
};

export const getActiveStudents = async(req ,res)=>{

    try{
        const students = await Student.find({
            Subscription:"Active"
        });
        res.status(200).json(students);
    }catch(err){
        res.status(500).json(err);
    }
}

