module.exports = function(req, res)
{
  var user = 
  {
    title : 'SIGNUP'
  }
  res.render("signUp.ejs",{user});
}