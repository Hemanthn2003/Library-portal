import React from "react";
import "./Pages.css";
import { useLocation } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
const Admin = () => {

    const location = useLocation();

    return (
        <>
            {
                location.pathname === "/admin"
                    ? <AdminLogin />
                    : <Dashboard />
            }
        </>
    );
};

export default Admin;