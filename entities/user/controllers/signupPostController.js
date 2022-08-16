
const userModel=require('../../../database/models/userSchema.js');

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({ storage: storage }).single("pic")

module.exports = function(req,res)
{
    
     upload(req, res, function () {
            
        const userName=req.body.userName;
        const email=req.body.email;
        const file= req.file;
        const password=req.body.password;

        if(!userName || !email || !password )
        {
            res.render("signup.ejs",{error:"Fill all details first"});
        }

        userModel.create({
        userName: userName,
        email: email,
        password: password,
        pic: file.filename,
        })
        .then(function ()
        {
           
            res.send("Succes");
        })
        .catch(function (err)
        {
            throw err;
        }
        )
    
        return;
        
     })
    
       
        
    
    
}
