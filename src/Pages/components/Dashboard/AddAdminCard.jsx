import React, { useState } from "react";
import axios from "axios";
import { FaPlus, FaTimes } from "react-icons/fa";

const AddAdminCard = ({ token, fetchAdmins }) => {

    const initialState = {
        id: "",
        Image: "",
        Name: "",
        Gender: "",
        Dob: "",
        Role: "Assistant",
        Password: ""
    };

    const [showForm, setShowForm] = useState(false);
    const [admin, setAdmin] = useState(initialState);

    const handleChange = (e) => {

        setAdmin({
            ...admin,
            [e.target.name]: e.target.value
        });

    };

    const addAdmin = async () => {

        try {

            await axios.post(
                "http://localhost:5000/admin",
                {
                    ...admin,
                    id: Number(admin.id)
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            fetchAdmins();
            setAdmin(initialState);
            setShowForm(false);

        } catch (err) {

            console.log(err);

            alert(err.response?.data?.message || "Unable to add admin.");

        }

    };

    if (!showForm) {

        return (

            <div
                className="addAdminCard"
                onClick={() => setShowForm(true)}
            >
                <h1>+</h1>
                <h2>Add Admin</h2>
            </div>

        );

    }

    return (

        <div className="adminFormCard">

            <h2>Add New Admin</h2>

            <input
                type="number"
                name="id"
                placeholder="Admin ID"
                value={admin.id}
                onChange={handleChange}
            />

            <input
                type="text"
                name="Image"
                placeholder="Image File Name"
                value={admin.Image}
                onChange={handleChange}
            />

            <input
                type="text"
                name="Name"
                placeholder="Name"
                value={admin.Name}
                onChange={handleChange}
            />

            <input
                type="text"
                name="Gender"
                placeholder="Gender"
                value={admin.Gender}
                onChange={handleChange}
            />

            <input
                type="text"
                name="Dob"
                placeholder="Date of Birth"
                value={admin.Dob}
                onChange={handleChange}
            />

            <select
                name="Role"
                value={admin.Role}
                onChange={handleChange}
            >
                <option value="Assistant">Assistant</option>
                <option value="Librarian">Librarian</option>
            </select>

            <input
                type="password"
                name="Password"
                placeholder="Password"
                value={admin.Password}
                onChange={handleChange}
            />

<div className="adminFormButtons">

    <button
        type="button"
        className="addBtn"
        onClick={addAdmin}
    >
        <FaPlus />
        <span>Add</span>
    </button>

    <button
        type="button"
        className="cancelBtn"
        onClick={()=>{
            setAdmin(initialState);
            setShowForm(false);
        }}
    >
        <FaTimes />
        <span>Cancel</span>
    </button>

</div>

        </div>

    );

};

export default AddAdminCard;