const Doctors=require("../../models/doctors");
const jwt=require("jsonwebtoken");



// doctors register with usrename and password
module.exports.create=function(req, res){

    try{
        Doctors.findOne({ username: req.body.username }, function(err, username){
            if(err){
                // if Internal Server Error 
                return res.status(500).json({
                    message: "Error ! Internal Server Error",
                    problem: "Yes"
                });
            }

            if(!username){
                Doctors.create(req.body, function(err, username){
                    if(err){
                        // if Internal Server Error 
                        return res.status(500).json({
                            message: "Error ! Internal Server Error",
                            problem: "Yes"
                        });
                    }

                    // successfully registation
                    return res.status(200).json({
                        message: "Doctors registation successfully",
                        problem: "No"
                    });
                })

            } else {

                // If User already have an account 
                return res.status(200).json({
                    message: "You have a Doctors Account already, login to continue",
                    problem: "Yes"
                });
            }

        });

    }catch(err){

        // if Internal Server Error 
        return res.status(500).json({
            message: "Error ! Internal Server Error",
            problem: "Yes"
        });
    }

}

module.exports.login=async function(req, res){
    try{
        
        let doctor=await Doctors.findOne({username: req.body.username});

        // If user not match retun error
        if(!doctor){
            return res.status(401).json({
                message: "Doctor username not registered",
                problem: "Yes"
            });
        }

        // If password is invalid
        if(doctor.password!=req.body.password){
            return res.status(401).json({
                message: "Password is Invalid",
                problem: "Yes"
            });
        }

        // successfully and send token
        return res.status(200).json({
            message: "Doctor login successfully",
            token: jwt.sign({_id:doctor._id},"Nitish",{ expiresIn: '1h' }),
            problem: "No"
        });

    }catch(err){

        // if Internal Server Error 
        return res.status(500).json({
            message: "Error ! Internal Server Error.....",
            problem: "Yes"
        });
    }
}