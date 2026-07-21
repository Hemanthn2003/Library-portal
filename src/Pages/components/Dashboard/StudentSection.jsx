import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentDashboardCard from "./StudentDashboardCard";
import AddStudentCard from "./AddStudentCard";

const StudentSection = ({ admin }) => {

    const token = localStorage.getItem("token");

    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/students"
            );

            setStudents(res.data);

        }

        catch (err) {

            console.log(err);

        }

    };

    useEffect(() => {

        fetchStudents();

    }, []);

    const activeStudents = students.filter(
        student => student.Subscription === "Active"
    );

    const inactiveStudents = students.filter(
        student => student.Subscription === "Inactive"
    );

    return (

        <section className="studentSection">

            <h1 className="sectionTitle">

                Library Subscription Active Students

            </h1>

            <div className="studentGrid">

                {

                    activeStudents.map(student => (

                        <StudentDashboardCard

                            key={student.id}

                            student={student}

                            token={token}

                            fetchStudents={fetchStudents}

                        />

                    ))

                }

            </div>

            <h1 className="sectionTitle">

                Other Students

            </h1>

            <div className="studentGrid">

                {

                    inactiveStudents.map(student => (

                        <StudentDashboardCard

                            key={student.id}

                            student={student}

                            token={token}

                            fetchStudents={fetchStudents}

                        />

                    ))

                }

            </div>
<h1 className="sectionTitle">

    Student Management

</h1>

<div className="studentFormSection">

    <AddStudentCard

        token={token}

        fetchStudents={fetchStudents}

    />

</div>

        </section>

    );

};

export default StudentSection;