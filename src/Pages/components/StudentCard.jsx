import "../Pages.css";

const StudentCard = ({ student }) => {
    return (
        <div className="studentCard">

            <div className="imageBox">
                <img
                    src={`/assets/${student.Image}`}
                    alt={student.Name}
                    className="studentImage"
                />
            </div>

            <div className="studentInfo">

                <h2>{student.Name}</h2>

                <p>
                    <strong>Gender :</strong> {student.Gender}
                </p>

                <p>
                    <strong>DOB :</strong> {student.Dob}
                </p>

                <p>
                    <strong>Class :</strong> {student.Class}
                </p>

                <p>
                    <strong>Status :</strong>

                    <span
                        className={
                            student.Subscription === "Active"
                                ? "active"
                                : "inactive"
                        }
                    >
                        {student.Subscription}
                    </span>
                </p>

            </div>

        </div>
    );
};

export default StudentCard;