const userModel = require("../../../database/models/userSchema");


module.exports = async function(req,res)
{
    const uId=req.params.uId; 

    user={
    title: 'LOGIN',
    message : '',
    uId: uId
  }
  try
  {
        var model= await userModel.findOne({uId : uId});
        //user.name = model.name;
        if(model && model.forgotPass==true)
          res.render("createPassword.ejs",{user : user});
        else
          res.send("Invalid link");
  }
  
  catch (err)
  {
    res.send("Invalid link");
  }
 return;
}