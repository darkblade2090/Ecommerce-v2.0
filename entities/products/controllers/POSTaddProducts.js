
const productModel=require('../../../database/models/products.js');

const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/products')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
const upload = multer({ storage: storage }).single("productImg")

module.exports = function(req,res)
{
    
     upload(req, res, function () {
            
        const productName=req.body.productName;
        const productDescription=req.body.productDescription;
        const productCatagory=req.body.productCatagory;
        const price=req.body.price;
        const file= req.file;


        productModel.create({
            productName: productName,
            productDescription: productDescription,
            productCatagory: productCatagory,
            price: price,
            productImg: file.filename,
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
