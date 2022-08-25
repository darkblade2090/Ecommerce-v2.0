module.exports = function(req, res)
{
  req.session.destroy();
  user={
    title: 'LOGIN',
    message : ''
  }
  res.render("login.ejs",{user : user})
}