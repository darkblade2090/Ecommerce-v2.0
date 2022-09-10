const cartModel=require('../../../database/models/cart.js');

module.exports =async function(req,res) {
    if(req.session.isAuthenticated)
    {
         var productId=req.params.id;
         //console.log(productId)
        try
        {
         // console.log(productId)
          var exists= await cartModel.findOne({productId: productId,userEmail:req.session.email});
          //console.log(exists);
          if(exists)
          {
            quantity=exists.quantity;
            await cartModel.updateOne({productId: productId,userEmail:req.session.email},{ $set: { quantity: quantity+1} })
          }
          else
          {
            await cartModel.create({
                productId: productId,
                quantity: 1,
                userEmail: req.session.email,
                });
          }
          res.redirect('/')
        }
        catch(err) {
          console.log(err)
            res.send("Server Error");
        };
    }
    else
    {
        user={
          title: 'LOGIN',
          message : 'Please login first'
        }
        res.render("login.ejs",{user : user})
      }

      return;
    }
