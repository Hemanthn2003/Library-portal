import React, { useState } from "react";
import axios from "axios";
import { FaPlus, FaTimes, FaCheck } from "react-icons/fa";
const AddStudentCard = ({ token, fetchStudents }) => {

    const initialState = {
        id: "",
        Image: "",
        Name: "",
        Gender: "",
        Dob: "",
        Class: "",
        Subscription: "Active"
    };

    const [showForm, setShowForm] = useState(false);
    const [student, setStudent] = useState(initialState);

    const handleChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });

    };

    const addStudent = async () => {

        try {

            await axios.post(

                "http://localhost:5000/students",

                {
                    ...student,
                    id: Number(student.id)
                },

                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }

            );

            fetchStudents();

            setStudent(initialState);

            setShowForm(false);

        }

   catch (err) {

    console.log("ERROR:", err);

    console.log("SERVER:", err.response?.data);

    alert(err.response?.data?.message || "Unable to add student.");

}

    };

    if (!showForm) {

        return (

            <div
                className="addStudentCard"
                onClick={() => setShowForm(true)}
            >

                <h1>+</h1>

                <h2>Add Student</h2>

            </div>

        );

    }

    return (

        <div className="studentFormCard">

            <h2>Add Student</h2>

            <input
                type="number"
                name="id"
                placeholder="Student ID"
                value={student.id}
                onChange={handleChange}
            />

            <input
                type="text"
                name="Image"
                placeholder="Image File Name"
                value={student.Image}
                onChange={handleChange}
            />

            <input
                type="text"
                name="Name"
                placeholder="Student Name"
                value={student.Name}
                onChange={handleChange}
            />

            <input
                type="text"
                name="Gender"
                placeholder="Gender"
                value={student.Gender}
                onChange={handleChange}
            />

            <input
                type="text"
                name="Dob"
                placeholder="Date of Birth"
                value={student.Dob}
                onChange={handleChange}
            />

            <input
                type="text"
                name="Class"
                placeholder="Class"
                value={student.Class}
                onChange={handleChange}
            />

            <select
                name="Subscription"
                value={student.Subscription}
                onChange={handleChange}
            >

                <option value="Active">Active</option>

                <option value="Inactive">Inactive</option>

            </select>

            <div className="studentFormButtons">

    <button
        type="button"
        className="saveBtn"
        onClick={addStudent}
        title="Add Student"
    >
        <FaPlus />
    </button>

    <button
        type="button"
        className="deleteBtn"
        title="Cancel"
        onClick={() => {
            setStudent(initialState);
            setShowForm(false);
        }}
    >
        <FaTimes />
    </button>

</div>

        </div>

    );

};

export default AddStudentCard;