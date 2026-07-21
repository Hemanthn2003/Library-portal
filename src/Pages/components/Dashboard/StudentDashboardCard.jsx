import React, { useState } from "react";
import axios from "axios";
import { FaPen, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

const StudentDashboardCard = ({
    student,
    token,
    fetchStudents
}) => {

    const [editMode, setEditMode] = useState(false);

    const [form, setForm] = useState({ ...student });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value

        });

    };

    const saveStudent = async () => {

        try {

            await axios.put(

                `http://localhost:5000/students/${student.id}`,

                form,

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            alert("Student updated successfully.");

            setEditMode(false);

            fetchStudents();

        }

        catch (err) {

            console.log(err);

            alert("Unable to update student.");

        }

    };

    const deleteStudent = async () => {

        const confirmDelete = window.confirm(
            "Delete this student?"
        );

        if (!confirmDelete) return;

        try {

            await axios.delete(

                `http://localhost:5000/students/${student.id}`,

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );

            fetchStudents();

        }

        catch (err) {

            console.log(err);

            alert("Unable to delete student.");

        }

    };

    return (

        <div className="dashboardStudentCard">

            <div className="studentImageBox">

                <img

                    src={`/assets/${student.Image}`}

                    alt={student.Name}

                    className="dashboardStudentImage"

                />

            </div>

            {

                editMode ?

                    <div className="dashboardStudentInfo studentEditForm">

                        <input

                            name="Name"

                            value={form.Name}

                            onChange={handleChange}

                            placeholder="Name"

                        />

                        <input

                            name="Gender"

                            value={form.Gender}

                            onChange={handleChange}

                            placeholder="Gender"

                        />

                        <input

                            name="Dob"

                            value={form.Dob}

                            onChange={handleChange}

                            placeholder="Date of Birth"

                        />

                        <input

                            name="Class"

                            value={form.Class}

                            onChange={handleChange}

                            placeholder="Class"

                        />

                        <select

                            name="Subscription"

                            value={form.Subscription}

                            onChange={handleChange}

                        >

                            <option value="Active">

                                Active

                            </option>

                            <option value="Inactive">

                                Inactive

                            </option>

                        </select>

                        <div className="dashboardButtons">

                            <button
                                type="button"
                                className="saveBtn"
                                onClick={saveStudent}
                            >
                                <FaCheck />
                            </button>

                            <button
                                type="button"
                                className="deleteBtn"
                                onClick={() => {
                                    setEditMode(false);
                                    setForm({ ...student });
                                }}
                            >
                                <FaTimes />
                            </button>

                        </div>

                    </div>

                    :

                    <div className="dashboardStudentInfo">

                        <h2>

                            {student.Name}

                        </h2>

                        <p>

                            <strong>ID :</strong> {student.id}

                        </p>

                        <p>

                            <strong>Gender :</strong> {student.Gender}

                        </p>

                        <p>

                            <strong>DOB :</strong> {student.Dob}

                        </p>

                        <p>

                            <strong>Class :</strong> {student.Class}

                        </p>

                        <p>

                            <strong>Status :</strong>

                            <span

                                className={

                                    student.Subscription === "Active"

                                        ? "active"

                                        : "inactive"

                                }

                            >

                                {student.Subscription}

                            </span>

                        </p>

                        <div className="dashboardButtons">

                            <button
                                type="button"
                                className="editBtn"
                                onClick={() => setEditMode(true)}
                            >
                                <FaPen />
                            </button>

                            <button
                                type="button"
                                className="deleteBtn"
                                onClick={deleteStudent}
                            >
                                <FaTrash />
                            </button>

                        </div>

                    </div>

            }

        </div>

    );

};

export default StudentDashboardCard;