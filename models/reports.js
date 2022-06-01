const mongoose=require("mongoose");

const reportSchema=new mongoose.Schema({
    status:{
        type: String,
        required: true
    },
    date:{
        type: Date
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctors",
        required: true
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patients",
        required: true
    }
});

const Report=mongoose.model('Report', reportSchema);
module.exports=Report;