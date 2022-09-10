const cartModel=require('../../../database/models/cart.js');

module.exports =async function(req, res)
{
    if(req.session.isAuthenticated)
    {   
        var productId = req.params.id;
        var value = req.params.value;
        
        try
        {
            var cartItem =await cartModel.findOne({productId: productId,userEmail: req.session.email});
            value = (parseInt(cartItem.quantity) + parseInt(value));
            if(value<1) value=1;
            if(value>10) value=10;
                await cartModel.updateOne({productId: productId,userEmail: req.session.email},{ $set: {quantity : value} });
            res.redirect('/user/cart');
        }
        catch(err) {
            console.log(err);
            res.send("Server Error");
        }
    }
    else
    {
        user={
            title: 'LOGIN',
            message : 'Please login first'
          }
          res.render("login.ejs",{user : user})
    }
}