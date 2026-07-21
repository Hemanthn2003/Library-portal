import HeroSection from "../components/Dashboard/HeroSection";
import AdminDetails from "../components/Dashboard/AdminDetails";
import StudentSection from "../components/Dashboard/StudentSection";
import AdminSection from "../components/Dashboard/AdminSection";
import "./Dashboard/Dashboard.css";
const Dashboard = () => {

    const admin = JSON.parse(localStorage.getItem("admin"));

    return (

        <>

            <HeroSection admin={admin} />

            <AdminDetails admin={admin} />

            <StudentSection admin={admin} />

            {
                admin.Role==="Librarian" &&

                <AdminSection />
            }

        </>

    );

};

export default Dashboard;