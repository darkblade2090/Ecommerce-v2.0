const userModel = require("../../../database/models/userSchema");
const hashPass=require('../services/hashPass');
const mailService=require('../services/mailService');

module.exports = async function(req, res)
{
    const uId=req.params.uId;
	const pass=req.body.password;
    
    try
    {
        var model = await userModel.findOne({uId : uId});
        if(model.forgotPass==true)
        {
            const hashedPassword = await hashPass.genratePass(pass)
            await userModel.updateOne({ uId: uId }, { $set: { password: hashedPassword , forgotPass : false} });

            
            var data= 
                      {
                        userName: model.userName,
                        email: model.email,
                        textPart : 'Password updated',
                        message : " <h1>Your account password has been updated successfully</h1>"
                      }
            
            mailService(data,function(error)
            {
              if(!error)
              {
                    model.fogotPass=
                    res.send("Password updated successfully. <a href='https://e-storev2-3p34g825jlml6xtgckq.codequotient.in'>Click here</a> to go back to home page.");


              }
              else
              {
                res.send("OOPS! Something went wrong. Please try again later.");
              }
            });
        }
        else
          res.send("OOPS! Something went wrong. Please try again later.");

        
    }
    catch(err)
    {
        res.send("OOPS! Something went wrong. Please try again later.");
    }
    
    return;
}