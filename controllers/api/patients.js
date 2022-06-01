const Patient = require("../../models/patients");
const Report = require("../../models/reports");
const Doctor = require("../../models/doctors");

const jwt = require("jsonwebtoken");

// For creating a new Patient
module.exports.create = function (req, res) {
    try {

        jwt.verify(req.body.token, "Nitish", function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    message: "Invalid user token",
                    problem: "Yes"
                });
            }

            if (!Doctor.findById(decoded._id)) {
                return res.status(401).json({
                    message: "Invalid user token",
                    problem: "Yes"
                });
            }

            Patient.findOne({ phoneNo: req.body.phone }, function (err, user) {
                if (err) {
                    // if Internal Server Error 
                    return res.status(500).json({
                        message: "Error ! Internal Server Error",
                        problem: "Yes"
                    });
                }

                if (!user) {
                    Patient.create({ phoneNo: req.body.phone }, function (err, user) {
                        if (err) {
                            // if Internal Server Error 
                            return res.status(500).json({
                                message: "Error ! Internal Server Error",
                                problem: "Yes"
                            });
                        }

                        // successfully registation
                        return res.status(200).json({
                            message: "Patient registation successfully",
                            id: user._id,
                            problem: "No"
                        });
                    })

                } else {

                    // If User already have an account 
                    return res.status(401).json({
                        message: "You already have a account",
                        id: user._id,
                        phone: user.phoneNo,
                        registationDate: user.createdAt,
                        problem: "Yes"
                    });
                }

            });

        });

    } catch (err) {

        // if Internal Server Error 
        return res.status(500).json({
            message: "Error ! Internal Server Error",
            problem: "Yes"
        });
    }
}

// Create a new report
module.exports.createReport = function (req, res) {
    try {

        jwt.verify(req.body.token, "Nitish", function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    message: "Invalid user token",
                    problem: "Yes"
                });
            }

            if (!Doctor.findById(decoded._id)) {
                return res.status(401).json({
                    message: "Invalid user token",
                    problem: "Yes"
                });
            }

            Report.create({
                patient: req.params.id,
                doctor: decoded._id,
                date: req.body.date,
                status: req.body.status
            });

            return res.status(200).json({
                message: "New reported added successfuly",
                problem: "No"
            });

        });

    } catch (err) {
        // if Internal Server Error 
        return res.status(500).json({
            message: "Error ! Internal Server Error",
            problem: "Yes"
        });
    }
}

// Return all report by Id 
module.exports.allReport = function (req, res) {
    try {
        jwt.verify(req.body.token, "Nitish", function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    message: "Invalid user token",
                    problem: "Yes"
                });
            }

            if (!Doctor.findById(decoded._id)) {
                return res.status(401).json({
                    message: "Invalid user token",
                    problem: "Yes"
                });
            }

            // Find all report By Id and return
            Report.find({ patient: req.params.id }, function (err, docs) {
                if (err) {
                    return res.status(401).json({
                        message: "Invalid user token",
                        problem: "Yes"
                    });
                }

                if (!docs) {
                    return res.status(401).json({
                        message: "No report are available",
                        noOfReports: 0,
                        problem: "Yes"
                    });
                }

                return res.status(200).json({
                    message: "Report are available",
                    noOfReports: docs.length,
                    report: docs,
                    problem: "No"
                });

            });
        });

    } catch (err) {

        // if Internal Server Error 
        return res.status(500).json({
            message: "Error ! Internal Server Error",
            problem: "Yes"
        });
    }
}


module.exports.status = function (req, res) {
    try {

        jwt.verify(req.body.token, "Nitish", function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    message: "Invalid user token",
                    problem: "Yes"
                });
            }

            if (!Doctor.findById(decoded._id)) {
                return res.status(401).json({
                    message: "Invalid user token",
                    problem: "Yes"
                });
            }

            Report.find({ status: req.params.status }, function (err, docs) {
                if(err){
                    // if Internal Server Error 
                    return res.status(500).json({
                        message: "Error ! Internal Server Error",
                        problem: "Yes"
                    });
                }

                return res.status(200).json({
                    message: `All ${req.params.status} patients status`,
                    noOfReports: docs.length,
                    data: docs,
                    problem: "No"
                });

            });

        });

    } catch (err) {
        // if Internal Server Error 
        return res.status(500).json({
            message: "Error ! Internal Server Error",
            problem: "Yes"
        });
    }
}