module.exports = function(req,res)
{
    var user = 
  {
    title : 'Products'
  }
    res.render('products.ejs',{user : user});
    return;
}