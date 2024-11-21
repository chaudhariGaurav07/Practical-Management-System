import { createAdmin,createStudent,createTeacher,getAllUsers } from "../controller/userController.js";
import { createSubject,getSubjects } from "../controller/subjectController.js";
import { createPractical,getAllPracticals } from "../controller/practicalController.js";
import { getEnrollmentById,createEnrollment,updateEnrollment,deleteEnrollment, getAllEnrollments } from "../controller/enrollController.js";
const router = express.Router()
import express from "express";
// const express = require("express")

router.post('/admin/create',createAdmin)
router.post('/teacher/create',createTeacher)
router.post('/student/create',createStudent)
router.post('/subject/create',createSubject)
router.post('/practical/create',createPractical)
router.post('/enrollment/create',createEnrollment)

router.get('/user/get',getAllUsers)
router.get('/subject/get',getSubjects)
router.get('/practical/get',getAllPracticals)
router.get('/enrollment/get',getAllEnrollments)
router.get('/enrollment/get/:id',getEnrollmentById)

router.put('/enrollment/put/:id',updateEnrollment)
router.delete('/enrollment/delete/:id',deleteEnrollment)



export default router;
