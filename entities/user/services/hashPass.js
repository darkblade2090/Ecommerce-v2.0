const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports =async function(pass,passData)
{
    const isMatch=await bcrypt.compare(pass,passData);
    return isMatch;

}