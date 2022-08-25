module.exports = function(req, res)
{
  req.session.destroy();
  var user = 
  {
    title : 'SIGNUP',
    message : ''
  }
  res.render("signUp.ejs",{user});
}