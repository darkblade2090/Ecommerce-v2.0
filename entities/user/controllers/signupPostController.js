
const userModel=require('../../../database/models/userSchema.js');
const mailService=require('../services/mailService');

//Multer
const multer  = require('multer');
const { set } = require('mongoose');

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


module.exports =async function(req,res)
{
    
     upload(req, res, async function () {
            
        const userName=req.body.userName;
        const email=req.body.email;
        const file= req.file;
        const password=req.body.password;
 
        if(!userName || !email || !password || file==undefined)  
        {
            res.render("signUp.ejs",{user : {result: false}});
        }
        
        try {
          //Checking if email already exists
            var isExist = await userModel.findOne({email:email});
            if(isExist)
            {
              res.render("signUp.ejs",{user : {message : 'Email already exist, try another email'}});
            }
            else
            {
                 var model=await userModel.create({
                      userName: userName,
                      email: email,
                      password: password,
                      pic: file.filename,
                      });
                 var url='https://e-storev2-3p34g825jlml6xtgckq.codequotient.in/user/verifyUser/'+ model.uId;
                 var data= 
                      {
                        userName: model.userName,
                        email: model.email,
                        textPart : 'Verify your account',
                        message : '<a href="'+url+'">Click here</a> to verify your account'
                      }
            
                  mailService(data,function(error)
                  {
                    if(!error)
                    {
                      res.render("signUp.ejs",{user : {result: true}});
                    }
                    else
                    {console.log(error)
                      res.render("signUp.ejs",{user : {result: false}});
                    }
                  });
            }
           
          } 
          catch (e) {
              res.render("signUp.ejs",{user : {result: false}});

          }
    
        return;
})
   
       
        
    
    
}
