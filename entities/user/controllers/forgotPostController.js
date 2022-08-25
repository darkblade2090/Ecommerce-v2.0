const userModel=require('../../../database/models/userSchema.js');
const mailService=require('../services/mailService');

module.exports =async function(req, res)
{
    const email=req.body.email;
    try
    {
	    var model =await userModel.findOne({email: email});

      if(model)
      {
          await userModel.updateOne({ email: email }, { $set: { forgotPass : true} });

            var url='https://e-storev2-3p34g825jlml6xtgckq.codequotient.in/user/forgotUser/'+ model.uId;
            var data= 
                      {
                        userName: model.userName,
                        email: model.email,
                        textPart : 'Create New Password',
                        message : '<a href="'+url+'">Click here</a> to create new password'
                      }
            
            mailService(data,function(error)
            {
              if(!error)
              {
                res.render("forgot.ejs",{user : {title: 'FORGOT', result: true}});
              }
              else
              {
                res.render("forgot.ejs",{user : {title: 'FORGOT', result: false}});
              }
            });
      }
      else
          res.render("forgot.ejs",{user : {title: 'FORGOT', message : 'Email doesn\'t exist! Please create new account.'}});
    }
    catch(err)
    {
      console.log(err)
        res.render("forgot.ejs",{user : {title: 'FORGOT', result: false}});
    }

    return;
}