import { createAdmin } from "../controller/userController.js";
const router = express.Router()
import express from "express";

router.post('/admin/create',createAdmin)

export default router;
