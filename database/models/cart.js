const mongoose=require('mongoose');
 
const cartSchema = new mongoose.Schema({

productId : {
  type: String,
  default: Date.now(),
  required: true
},
quantity : {
    type: Number,
    required: true
},
userEmail : {
    type: String,
    required: true
}
});

const cartModel=mongoose.model('cart',cartSchema);

module.exports=cartModel;