
const mailjet = require('node-mailjet');
const transporter=mailjet.connect(
  "1dfd85e331742b82d15d9abeb786533c",
  "fca2c942edb018be22930eef63d41d2c"
)

module.exports = function sendMail(data,callback)
{
  const request = transporter.post('send').request({
    FromEmail: 'yashk2090@gmail.com',
    FromName: 'E-Store',
    Subject: 'Welcome to E-Store',
   'Text-part' : data.textPart,
    'Html-part' : "<h3>Dear "+ data.userName+",</h3><br>Thank you for joining E-Store.<br>"+ data.message,
  Recipients: [{ Email: data.email }],
})
request
  .then(result => {
    callback();
  })
  .catch(err => {
    callback("Error in sending mail");
  })

}