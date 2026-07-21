import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Pages.css";

const AdminLogin = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        Name: "",
        Password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");

        try {

            const res = await axios.post(
                "http://localhost:5000/admin/login",
                formData
            );

            localStorage.setItem(
                "token",
                res.data.token
            );

            localStorage.setItem(
                "admin",
                JSON.stringify(res.data.admin)
            );

            navigate("/admin/dashboard");

        }

        catch (err) {

            setError(
                err.response?.data?.message || "Login Failed"
            );

        }

    };

    return (

        <div className="loginContainer">

            <form className="loginForm" onSubmit={handleSubmit}>

                <h1>Library Admin Login</h1>

                <input
                    type="text"
                    placeholder="Enter Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    name="Password"
                    value={formData.Password}
                    onChange={handleChange}
                    required
                />

                {error &&

                    <p className="error">
                        {error}
                    </p>

                }

                <button type="submit">
                    Login
                </button>

            </form>

        </div>

    );

};

export default AdminLogin;