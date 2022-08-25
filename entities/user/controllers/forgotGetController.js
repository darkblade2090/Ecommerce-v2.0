
module.exports= function(req,res){

    const uId=req.params.uid;
    user={
    title: 'FORGOT',
  }
  res.render("forgot.ejs",{user : user})
}