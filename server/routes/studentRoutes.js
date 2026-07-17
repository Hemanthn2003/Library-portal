import express from "express";

import { getStudents, getActiveStudents } from "../controller/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/active", getActiveStudents)

export default router;

