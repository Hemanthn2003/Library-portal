import React, { useState } from "react";
import axios from "axios";
import { FaPen, FaTrash, FaCheck, FaTimes } from "react-icons/fa";

const AdminDashboardCard = ({ admin, token, fetchAdmins }) => {

    const [editMode, setEditMode] = useState(false);

    const [form, setForm] = useState({
        Image: admin.Image,
        Name: admin.Name,
        Gender: admin.Gender,
        Dob: admin.Dob,
        Role: admin.Role,
        Password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const saveAdmin = async () => {

        try {

            const data = {
                Image: form.Image,
                Name: form.Name,
                Gender: form.Gender,
                Dob: form.Dob,
                Role: form.Role
            };

            if (form.Password.trim() !== "") {
                data.Password = form.Password;
            }

            await axios.put(
                `http://localhost:5000/admin/${admin.id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert("Admin updated successfully");

            await fetchAdmins();

            setEditMode(false);

        } catch (err) {

            console.log(err.response?.data);

            alert(err.response?.data?.message || "Unable to update admin.");

        }

    };

    const deleteAdmin = async () => {

        if (!window.confirm("Delete this admin?")) return;

        try {

            await axios.delete(
                `http://localhost:5000/admin/${admin.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            fetchAdmins();

        } catch (err) {

            console.log(err);

            alert("Unable to delete admin.");

        }

    };

    return (

        <div
            className={
                admin.Role === "Librarian"
                    ? "adminCard librarianCard"
                    : "adminCard assistantCard"
            }
        >

            <img
                src={`/assets/${admin.Image}`}
                alt={admin.Name}
                className="adminCardImage"
            />

            {editMode ? (

                <div className="adminEditForm">

                    <input
                        type="text"
                        name="Name"
                        value={form.Name}
                        onChange={handleChange}
                        placeholder="Name"
                    />

                    <input
                        type="text"
                        name="Gender"
                        value={form.Gender}
                        onChange={handleChange}
                        placeholder="Gender"
                    />

                    <input
                        type="text"
                        name="Dob"
                        value={form.Dob}
                        onChange={handleChange}
                        placeholder="Date of Birth"
                    />

                    <select
                        name="Role"
                        value={form.Role}
                        onChange={handleChange}
                    >
                        <option value="Librarian">Librarian</option>
                        <option value="Assistant">Assistant</option>
                    </select>

                    <input
                        type="password"
                        name="Password"
                        value={form.Password}
                        onChange={handleChange}
                        placeholder="Leave blank to keep current password"
                    />

                    <div className="dashboardButtons">

                        <button
                            type="button"
                            className="saveBtn"
                            onClick={saveAdmin}
                        >
                            <FaCheck />
                        </button>

                        <button
                            type="button"
                            className="deleteBtn"
                            onClick={() => {
                                setEditMode(false);
                                setForm({
                                    Image: admin.Image,
                                    Name: admin.Name,
                                    Gender: admin.Gender,
                                    Dob: admin.Dob,
                                    Role: admin.Role,
                                    Password: ""
                                });
                            }}
                        >
                            <FaTimes />
                        </button>

                    </div>

                </div>

            ) : (

                <>

                    <h2>{admin.Name}</h2>

                    <p><strong>ID :</strong> {admin.id}</p>

                    <p><strong>Gender :</strong> {admin.Gender}</p>

                    <p><strong>DOB :</strong> {admin.Dob}</p>

                    <p><strong>Role :</strong> {admin.Role}</p>

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
                            onClick={deleteAdmin}
                        >
                            <FaTrash />
                        </button>

                    </div>

                </>

            )}

        </div>

    );

};

export default AdminDashboardCard;