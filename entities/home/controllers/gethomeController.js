const getProducts=require('../services/getProducts');

module.exports =async function(req, res)
{
  var products = await getProducts(0);
    const user={name : '', pic : '', title : 'HOMEPAGE', products : products}
    if(req.session.isAuthenticated)
    {
        user.name = req.session.userName;
        user.pic = req.session.pic;
        user.title

        res.render('homePage.ejs',{user : user});
        return;
    }
  res.render('homePage.ejs',{user : user});
}