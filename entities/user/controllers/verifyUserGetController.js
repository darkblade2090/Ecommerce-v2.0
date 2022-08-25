const userModel=require('../../../database/models/userSchema');

module.exports = async function(req,res)
{
    const uId = req.params.uId;

    try
    {
        var user= await userModel.findOne({uId : uId});

        if(user)
        {
            if(user.isVerified)
            {
                res.send("User is already verified")
            }
            else
            {
                userModel.updateOne({ uId: uId }, { $set: { isVerified: true } })
				.then(function()
				{
					console.log("User updated in server");
				})
				.catch(function()
				{
					console.log("User update failed");
				})
				res.send("User is verfied");
            }
        }
    }
    catch (err)
    {
        console.log(err);
        res.send("Error occured in verifing user")
    }
   return;

}