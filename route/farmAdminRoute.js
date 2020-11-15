import express from 'express'
const router = express.Router()



// router.get('/', (req, res)=> {
//     res.render('farm-view/home');
// });

router.get('/', function(req, res) {
    res.render('adminView/badges', {layout: 'farmView.handlebars'});
});

// router.get('/contact',(req, res) =>{
//     res.render('farm-view/fcontact');
// });
//
// router.get('/services',(req, res) =>{
//     res.render('farm-view/services');
// });
//
// router.get('/cart',(req, res)=> {
//     res.render('farm-view/cart');
// });
//
// router.get('/checkout',(req, res)=> {
//     res.render('farm-view/checkout');
// });
//
//
// router.get('/login',(req, res) =>{
//     res.render('farm-view/login');
// });
//
// router.get('/blog-details',(req, res) =>{
//     res.render('farm-view/blog-details');
// });
//
// router.get('/blog',(req, res) =>{
//     res.render('farm-view/blog');
// });
//
// router.get('/error',(req, res) =>{
//     res.render('farm-view/error');
// });
//
// router.get('/faq',(req, res) =>{
//     res.render('farm-view/faq');
// });
//
// router.get('/blog-fullwidth',(req, res) =>{
//     res.render('farm-view/blog-fullwidth');
// });
//
//
// router.get('/blog-sidebar',(req, res) =>{
//     res.render('farm-view/blog-sidebar');
// });
//
// router.get('/shop',(req, res) =>{
//     res.render('shop');
// });
//
// router.get('/shop-list',(req, res) =>{
//     res.render('farm-view/shop-list');
// });
//
// router.get('/shop-fullwidth',(req, res) =>{
//     res.render('farm-view/shop-fullwidth');
// });
//
// router.get('/shop-fullwidth-list',(req, res) =>{
//     res.render('farm-view/shop-fullwidth-list');
// });
//
// router.get('/shop-right-sidebar',(req, res) =>{
//     res.render('farm-view/shop-right-sidebar');
// });
//
// router.get('/product-details',(req, res) =>{
//     res.render('farm-view/product-details');
// });
//
// router.get('/product-grouped',(req, res) =>{
//     res.render('farm-view/product-grouped');
// });
//
// router.get('/product-sidebar',(req, res) =>{
//     res.render('farm-view/farm-view/product-sidebar');
// });
//
//
// router.get('/my-account',(req, res) =>{
//     res.render('farm-view/my-account');
// });
//
// router.get('/wishlist',(req, res) =>{
//     res.render('farm-view/wishlist');
// });
//
// router.get('/variable-product',(req, res) =>{
//     res.render('farm-view/variable-product');
// });

export default router;
