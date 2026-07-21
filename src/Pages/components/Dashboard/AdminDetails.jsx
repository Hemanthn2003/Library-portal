import React from "react";

const AdminDetails = ({ admin }) => {

    return (

        <section className="adminDetailsSection">

            <div className="adminImageBox">

                <img
                    src={`/assets/${admin.Image}`}
                    alt={admin.Name}
                    className="adminImage"
                />

            </div>

            <div className="adminInfo">

                <h1>Administrator Details</h1>

                <div className="adminGrid">

                    <div className="adminField">

                        <span>ID</span>

                        <h3>{admin.id}</h3>

                    </div>

                    <div className="adminField">

                        <span>Name</span>

                        <h3>{admin.Name}</h3>

                    </div>

                    <div className="adminField">

                        <span>Role</span>

                        <h3>{admin.Role}</h3>

                    </div>

                    <div className="adminField">

                        <span>Gender</span>

                        <h3>{admin.Gender}</h3>

                    </div>

                    <div className="adminField">

                        <span>Date of Birth</span>

                        <h3>{admin.Dob}</h3>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default AdminDetails;