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
            if(hashPass.compare(password,user.password)) {
                if(user.isVerified==true)
                {
                    req.session.isAuthenticated = true;
                    req.session.userName = user.userName;
                    req.session.pic = user.pic;
                    res.redirect('/');
                    return;
                }
                else
                {
                    var user={
                              message : 'Verify your account first'
                             }
                    res.render("login.ejs",{user : user});
                    return;
                }
            }
        }

        var user={
            message : 'Invalid user'
        }
        res.render("login.ejs",{user : user});
    }
    else
        res.send("Already logged in logout first")
    return;
}