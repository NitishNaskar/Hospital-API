const express=require("express");
const router=express.Router();

router.use('/reports',require('./patients'));
router.use('/doctors', require('./doctors'));
router.use('/patients', require('./patients'));

module.exports=router;