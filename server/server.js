import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import studentRoutes from "./routes/studentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js"; 
 
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Mongodb Connected")
        console.log("Database:", mongoose.connection.db.databaseName);

}).catch((err)=>{
    console.log(err);
});


 app.use("/students", studentRoutes);
app.use("/admin", adminRoutes);

app.get("/",(req,res)=>{
    res.send("Library Api Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);

});