import { createAdmin,createStudent,createTeacher,getAllUsers } from "../controller/userController.js";
import { createSubject,getSubjects } from "../controller/subjectController.js";
import { createPractical,getAllPracticals } from "../controller/practicalController.js";

const router = express.Router()
import express from "express";

router.post('/admin/create',createAdmin)
router.post('/teacher/create',createTeacher)
router.post('/student/create',createStudent)
router.post('/subject/create',createSubject)
router.post('/practical/create',createPractical)

router.get('/user/get',getAllUsers)
router.get('/subject/get',getSubjects)
router.get('/practical/get',getAllPracticals)


export default router;
