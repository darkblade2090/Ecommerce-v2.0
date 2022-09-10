const productModel=require('../../../database/models/products.js');

module.exports = async function(productIndex)
{
    var count= await productModel.count({});
   var skip= (6*productIndex)%count;
  var products = await productModel.find()
  .skip(skip)
  .limit(6);

   return products;
}