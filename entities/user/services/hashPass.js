const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.compare =async function(pass,passData)
{
    const isMatch=await bcrypt.compare(pass,passData);
    return isMatch;

}

module.exports.genratePass = async function(password)
{
    const salt= await bcrypt.genSalt(saltRounds);
    const hashedPassword=await bcrypt.hash(password,salt);
    return hashedPassword;
}