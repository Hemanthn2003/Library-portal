import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminDashboardCard from "./AdminDashboardCard";
import AddAdminCard from "./AddAdminCard";

const AdminSection = () => {

    const token = localStorage.getItem("token");

    const [admins, setAdmins] = useState([]);

    const fetchAdmins = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/admin",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setAdmins(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        fetchAdmins();

    }, []);

    return (

        <section className="adminSection">

            <h1 className="sectionTitle">

                Our Admins

            </h1>

            <div className="adminGridCards">

    {

        admins.map(admin => (

            <AdminDashboardCard

                key={admin.id}

                admin={admin}

                token={token}

                fetchAdmins={fetchAdmins}

            />

        ))

    }

</div>

<div className="adminFormSection">

    <AddAdminCard

        token={token}

        fetchAdmins={fetchAdmins}

    />

</div>

        </section>

    );

};

export default AdminSection;