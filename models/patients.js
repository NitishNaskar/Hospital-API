const mongoose=require("mongoose");

const patientSchema=new mongoose.Schema({
    phoneNo:{
        type: String,
        required: true,
        unique: true
    },
    report: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reports"  
    }]
},{
    timestamps: true
});

const Patient=mongoose.model('Patient', patientSchema);
module.exports=Patient;