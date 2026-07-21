import Student from "../models/student.js";

// Get all students
export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get active students
export const getActiveStudents = async (req, res) => {
    try {
        const students = await Student.find({
            Subscription: "Active"
        });

        res.status(200).json(students);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add student
export const addStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json(student);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateStudent = async (req, res) => {
    try {

        const student = await Student.findOneAndUpdate(
            { id: Number(req.params.id) },
            req.body,
            {
                returnDocument: "after",
                runValidators: true
            }
        );

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        res.status(200).json(student);

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

// Delete student
export const deleteStudent = async (req, res) => {

    try {

        const student = await Student.findOneAndDelete({
            id: Number(req.params.id)
        });

        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            message: err.message
        });

    }

};