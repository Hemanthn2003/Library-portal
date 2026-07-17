import Admin from "../models/admin.js";
import jwt from "jsonwebtoken";


export const login = async(req , res)=>{

    const{Name ,Password}=req.body;

    try{
        const admin= await Admin.findOne({
            Name
        });

        if(!admin){
            return res.status(404).json({
                message:"Admin not found"
            });
        }
        if(admin.Password!==Password){
              return res.status(400).json({
                message:"Incorrect Password"
            });
        }

        const token = jwt.sign({
            id:admin._id,
             role:admin.role
        },
    process.env.JWT_SECRET,
    {
        expiresIn:"1d"
    }
);
res.json({
    token,
    admin
});

    }catch(err){
        res.json(err);
    }

};