const express=require("express");
const router=express.Router();
const patient=require("../../controllers/api/patients");


router.post("/register",patient.create);
router.post("/:id/create_report",patient.createReport);
router.post("/:id/all_reports",patient.allReport);
router.post("/:status",patient.status);

module.exports=router;