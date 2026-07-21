import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Modal from "../Components/Modal";
import "../Pages.css";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        Name: "",
        Password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const [modal, setModal] = useState({
        isOpen: false,
        title: "",
        message: "",
        type: "success",
        navigateAfter: false,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/admin/login",
                formData
            );

            localStorage.setItem("token", res.data.token);
            localStorage.setItem(
                "admin",
                JSON.stringify(res.data.admin)
            );

            setModal({
                isOpen: true,
                title: "Login Successful",
                message: `Welcome ${res.data.admin.Name}!`,
                type: "success",
                navigateAfter: true,
            });

        } catch (err) {

            setModal({
                isOpen: true,
                title: "Login Failed",
                message:
                    err.response?.data?.message ||
                    "Invalid Username or Password.",
                type: "error",
                navigateAfter: false,
            });

        }
    };

    const handleModalOk = () => {

        const shouldNavigate = modal.navigateAfter;

        setModal({
            isOpen: false,
            title: "",
            message: "",
            type: "success",
            navigateAfter: false,
        });

        if (shouldNavigate) {
            navigate("/admin/dashboard");
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

                <div className="password-container">

                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        name="Password"
                        value={formData.Password}
                        onChange={handleChange}
                        required
                    />

                    <span
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>

                </div>

                <button type="submit">
                    Login
                </button>

            </form>

            <Modal
                isOpen={modal.isOpen}
                title={modal.title}
                message={modal.message}
                type={modal.type}
                onOk={handleModalOk}
            />

        </div>
    );
};

export default AdminLogin;