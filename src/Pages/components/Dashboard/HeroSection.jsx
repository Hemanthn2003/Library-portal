import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal";

const HeroSection = ({ admin }) => {

    const navigate = useNavigate();

    const [modal, setModal] = useState({
        isOpen: false,
        title: "",
        message: "",
        type: "warning",
        showCancel: false,
        onConfirm: null
    });

    const hour = new Date().getHours();

    let greeting = "";

    if (hour < 12) {

        greeting = "Good Morning";

    }

    else if (hour < 17) {

        greeting = "Good Afternoon";

    }

    else {

        greeting = "Good Evening";

    }

    const closeModal = () => {

        setModal({
            isOpen: false,
            title: "",
            message: "",
            type: "warning",
            showCancel: false,
            onConfirm: null
        });

    };

    const confirmLogout = () => {

        closeModal();

        localStorage.removeItem("token");

        localStorage.removeItem("admin");

        navigate("/admin");

    };

    const logout = () => {

        setModal({
            isOpen: true,
            title: "Logout",
            message: "Are you sure you want to logout?",
            type: "warning",
            showCancel: true,
            onConfirm: confirmLogout
        });

    };

    return (

        <>

            <section className="heroSection">

                <div className="heroContent">

                    <div>

                        <h3>

                            {greeting},

                        </h3>

                        <h1>

                            {admin.Name}

                        </h1>

                        <h2>

                            {admin.Role}

                        </h2>

                        <p>

                            Welcome back to your Library Management Portal.

                        </p>

                        <p>

                            "Knowledge is the key that unlocks every door."

                        </p>

                    </div>

                    <button
                        className="logoutBtn"
                        onClick={logout}
                    >

                        Logout

                    </button>

                </div>

            </section>

            <Modal
                isOpen={modal.isOpen}
                title={modal.title}
                message={modal.message}
                type={modal.type}
                showCancel={modal.showCancel}
                onOk={() => {

                    if (modal.showCancel && modal.onConfirm) {

                        modal.onConfirm();

                    } else {

                        closeModal();

                    }

                }}
                onCancel={closeModal}
            />

        </>

    );

};

export default HeroSection;