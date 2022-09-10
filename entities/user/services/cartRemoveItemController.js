const cartModel=require('../../../database/models/cart.js');

module.exports =async function(req,res)
{
    if(req.session.isAuthenticated)
    {   
        var productId = req.params.id;
        try
        {
            await cartModel.deleteOne({productId: productId,userEmail: req.session.email});
            res.redirect('/user/cart');
        }
        catch(err) {
            console.log(err)
            res.send("Server Error");
        }
    }
    else
    {
    
          res.redirect("/user/login")
    }
}