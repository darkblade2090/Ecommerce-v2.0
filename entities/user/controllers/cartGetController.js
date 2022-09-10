const cartModel=require('../../../database/models/cart.js');
const productModel=require('../../../database/models/products.js');

module.exports =async function(req, res)
{
    if(req.session.isAuthenticated)
    {
        user={
            title: 'CART',
            message : '',
          }
        user.name = req.session.userName;
        user.pic = req.session.pic;

        try
        {
            var cartItems= await cartModel.find({userEmail:req.session.email});
            user.cart=cartItems.length;
            if(cartItems.length!=0)
            {
                let products=[];
                
                 for(var i=0;i<cartItems.length;i++)
                {
                    var pro= await productModel.findOne( {_id : cartItems[i].productId});
                    products.push({productName: pro.productName, productImg: pro.productImg,price : pro.price, productId : cartItems[i].productId, quantity : cartItems[i].quantity});
                    
                }

                //console.log(products)
                
                res.render('cart.ejs',{products : products, user});
            }
            else
            {
                user.message='Your Cart is empty';
                res.render('cart.ejs',{products :[],user});
            }
        }
        catch(err)
        {
            res.send("Unable to load your cart.");
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

      return;
}