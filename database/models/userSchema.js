const mongoose=require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
 
const userSchema = new mongoose.Schema({
userName: {
  type: String,
  required: true,
},
email: {
  type: String,
  required: true,
},
password: {
  type: String,
  required: true,
},
pic: {
  type: String,
   
},
isVerified: {
  type : Boolean,
  default: false,
  required: true
},

forgotPass : 
{
  type : Boolean,
  default: false,
  required: true
},

uId : {
  type: String,
  default: Date.now(),
  required: true
},

},

{timestamps:true}
);

userSchema.pre("save", async function(next)
{
  try{
    const salt= await bcrypt.genSaltSync(saltRounds);
    const hashedPassword=await bcrypt.hashSync(this.password,salt)
    this.password=hashedPassword;
    next();
  }
  catch(error)
  {
    next(error)
  }
})

const userModel=mongoose.model('userSchema',userSchema);

module.exports=userModel;