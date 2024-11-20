import { createAdmin,createStudent,createTeacher,getAllUsers } from "../controller/userController.js";
import { createSubject,getSubjects } from "../controller/subjectController.js";

const router = express.Router()
import express from "express";

router.post('/admin/create',createAdmin)
router.post('/teacher/create',createTeacher)
router.post('/student/create',createStudent)
router.post('/subject/create',createSubject)

router.get('/user/get',getAllUsers)
router.get('/subject/get',getSubjects)


export default router;
