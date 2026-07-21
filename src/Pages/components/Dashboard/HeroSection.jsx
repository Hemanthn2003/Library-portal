import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = ({ admin }) => {

    const navigate = useNavigate();

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

    const logout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("admin");

        navigate("/admin");

    };

    return (

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

    );

};

export default HeroSection;