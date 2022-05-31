const Doctors = require("../../models/doctors");

// doctors register with usrename and password
module.exports.create = async function(req, res){

    try{
        Doctors.findOne({ username: req.body.username }, function(err, username){
            if(err){
                // if Internal Server Error 
                return res.json(500, {
                    message: "Error ! Internal Server Error",
                    problem: "Yes"
                });
            }

            if(!username){
                Doctors.create(req.body, function(err, username){
                    if(err){
                        // if Internal Server Error 
                        return res.json(500, {
                            message: "Error ! Internal Server Error",
                            problem: "Yes"
                        });
                    }

                    // successfully registation
                    return res.json(200, {
                        message: "Doctors registation successfully",
                        problem: "No"
                    });
                })

            } else {

                // If User already have an account 
                return res.json(200, {
                    message: "You have a Doctors Account already, login to continue",
                    problem: "Yes"
                });
            }

        });

    }catch(err){

        // if Internal Server Error 
        return res.json(500, {
            message: "Error ! Internal Server Error",
            problem: "Yes"
        });
    }

}

module.exports.login = async function (req, res) {

}