module.exports = function(req, res)
{
  user={
    title: 'LOGIN'
  }
  res.render("login.ejs",{user : user})
}