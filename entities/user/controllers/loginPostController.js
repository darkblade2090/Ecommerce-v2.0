const userModel=require('../../../database/models/userSchema');
const hashPass=require('../services/hashPass');

module.exports = async function(req,res)
{
   if(!req.session.isAuthenticated)
    {
        const email=req.body.email;
        const password=req.body.password;

        var user = await userModel.findOne({ email: email  });
        if(user) {
            if(hashPass(password,user.password)) {
                req.session.isAuthenticated = true;
                req.session.userName = user.userName;
                req.session.pic = user.pic;
                res.redirect('/');
                return;
            }
        }
        res.send("Login Failed");
    }
    else
        res.send("Already logged in logout first")
    return;
}