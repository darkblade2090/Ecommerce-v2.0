const homeRoutes=require('./home/routes/homeRoutes');
const userRoutes=require('./user/routes/userRoutes');
const productRoutes=require('./products/routes/productRoutes');

module.exports = function initiateRoutes(app)
{
    app.use('/', homeRoutes);
    app.use('/user', userRoutes);
    app.use('/products', productRoutes);
    
}