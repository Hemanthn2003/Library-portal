import Admin from "../models/admin.js";
import jwt from "jsonwebtoken";

// ===================== LOGIN =====================

export const login = async (req, res) => {

    const { Name, Password } = req.body;

    try {

        const admin = await Admin.findOne({ Name });

        if (!admin) {

            return res.status(404).json({
                message: "Admin not found"
            });

        }

        if (admin.Password !== Password) {

            return res.status(400).json({
                message: "Incorrect Password"
            });

        }

        const token = jwt.sign(
            {
                id: admin._id,
                role: admin.Role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).json({
            token,
            admin
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// ===================== GET ADMINS =====================

export const getAdmins = async (req, res) => {

    try {

        const admins = await Admin.find().select("-Password");

        res.status(200).json(admins);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// ===================== ADD ADMIN =====================

export const addAdmin = async (req, res) => {

    try {

        const existingAdmin = await Admin.findOne({
            id: Number(req.body.id)
        });

        if (existingAdmin) {

            return res.status(400).json({
                message: "Admin ID already exists."
            });

        }

        const admin = await Admin.create({
            ...req.body,
            id: Number(req.body.id)
        });

        res.status(201).json(admin);

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

// ===================== UPDATE ADMIN =====================

export const updateAdmin = async (req, res) => {

    try {

        const updatedAdmin = await Admin.findOneAndUpdate(
            { id: Number(req.params.id) },
            {
                $set: {
                    Image: req.body.Image,
                    Name: req.body.Name,
                    Gender: req.body.Gender,
                    Dob: req.body.Dob,
                    Role: req.body.Role,
                    ...(req.body.Password ? { Password: req.body.Password } : {})
                }
            },
            {
                new: true,
                runValidators: true
            }
        );

        if (!updatedAdmin) {
            return res.status(404).json({
                message: "Admin not found"
            });
        }

        return res.status(200).json(updatedAdmin);

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            message: err.message
        });

    }

};

// ===================== DELETE ADMIN =====================

export const deleteAdmin = async (req, res) => {

    try {

        const admin = await Admin.findOneAndDelete({
            id: Number(req.params.id)
        });

        if (!admin) {

            return res.status(404).json({
                message: "Admin not found"
            });

        }

        res.status(200).json({
            message: "Admin deleted successfully"
        });

    } catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};