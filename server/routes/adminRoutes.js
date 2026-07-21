import express from "express";
import verifyToken from "../middleware/auth.js";
import verifyRole from "../middleware/role.js";

import {
    login,
    getAdmins,
    addAdmin,
    updateAdmin,
    deleteAdmin
} from "../controller/adminController.js";

const router=express.Router();

router.post("/login",login);

router.get(
    "/",
    verifyToken,
    verifyRole("Librarian"),
    getAdmins
);

router.post(
    "/",
    verifyToken,
    verifyRole("Librarian"),
    addAdmin
);

router.put(
    "/:id",
    verifyToken,
    verifyRole("Librarian"),
    updateAdmin
);

router.delete(
    "/:id",
    verifyToken,
    verifyRole("Librarian"),
    deleteAdmin
);
export default router; 