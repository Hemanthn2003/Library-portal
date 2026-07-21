import express from "express";
import verifyToken from "../middleware/auth.js";
import { getStudents, getActiveStudents ,addStudent , updateStudent , deleteStudent} from "../controller/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/active", getActiveStudents)
router.post(
    "/",
    verifyToken,
    addStudent
);

router.put(
    "/:id",
    verifyToken,
    updateStudent
);

router.delete(
    "/:id",
    verifyToken,
    deleteStudent
);
export default router;

