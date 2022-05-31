const express=require("express");
const router=express.Router();
const Doctors=require("../../controllers/api/doctors");


router.post("/register",Doctors.create);
router.post("/login",Doctors.login);

module.exports=router;