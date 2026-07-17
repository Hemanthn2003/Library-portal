import { useEffect, useState } from "react";
import api from "../services/api";
import StudentCard from "./components/StudentCard";
import './Pages.css'
const Students = () => {

    const [students, setStudents] = useState([]);

    useEffect(() => {

        fetchStudents();

    }, []);

const fetchStudents = async () => {
    try {
        const res = await api.get("/students");
        setStudents(res.data);

    } catch (err) {
        console.log("API Error:", err);
    }
};
    return(
<div>
  <header className="pageHeader">
    <h1>Our Students</h1>
    </header>
        <div className="studentsContainer">

            {

                students.map(student=>(

                    <StudentCard

                        key={student._id}

                        student={student}

                    />

                ))

            }

        </div>
           <section className='admissionInfo'>
    <h2>Join Our Library</h2>

<p>
  Become a member of the VDIT Library and gain access to a wide collection of
  engineering textbooks, reference materials, technical resources, and academic
  publications. Students from all engineering departments can register using
  their valid college details and access library resources that support their
  academic learning, technical knowledge, and career development.
</p>
</section>
</div>
    );

};

export default Students;