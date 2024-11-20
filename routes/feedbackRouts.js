import { createAdmin,createStudent,createTeacher,getAllUsers } from "../controller/userController.js";
const router = express.Router()
import express from "express";

router.post('/admin/create',createAdmin)
router.post('/teacher/create',createTeacher)
router.post('/student/create',createStudent)

router.get('/user/get',getAllUsers)


export default router;
