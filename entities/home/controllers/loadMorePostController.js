const getProducts=require('../services/getProducts');
const cartModel=require('../../../database/models/cart.js');
var count =0;

module.exports =async function(req, res)
{

  var products = await getProducts(++count);

  const user={name : '', pic : '', title : 'HOMEPAGE', products : products,cart:0};
    if(req.session.isAuthenticated)
    {
      var count= await cartModel.count({email : req.session.email})
      user.name = req.session.userName;
      user.pic = req.session.pic;
      user.cart=count;

        res.render('homePage.ejs',{user : user});
        return;
    }
  res.render('homePage.ejs',{user : user});
}