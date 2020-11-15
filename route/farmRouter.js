import express from 'express'
const router = express.Router()



router.get('/', (req, res)=> {
    res.render('home');
});

router.get('/about',(req, res) => {
    res.render('about');
});

router.get('/contact',(req, res) =>{
    res.render('contact');
});

router.get('/services',(req, res) =>{
    res.render('services');
});

router.get('/cart',(req, res)=> {
    res.render('cart');
});

router.get('/checkout',(req, res)=> {
    res.render('checkout');
});


router.get('/login',(req, res) =>{
    res.render('login');
});

router.get('/blog-details',(req, res) =>{
    res.render('blog-details');
});

router.get('/blog',(req, res) =>{
    res.render('blog');
});

router.get('/error',(req, res) =>{
    res.render('error');
});

router.get('/faq',(req, res) =>{
    res.render('faq');
});

router.get('/blog-fullwidth',(req, res) =>{
    res.render('blog-fullwidth');
});


router.get('/blog-sidebar',(req, res) =>{
    res.render('blog-sidebar');
});

router.get('/shop',(req, res) =>{
    res.render('shop');
});

router.get('/shop-list',(req, res) =>{
    res.render('shop-list');
});

router.get('/shop-fullwidth',(req, res) =>{
    res.render('shop-fullwidth');
});

router.get('/shop-fullwidth-list',(req, res) =>{
    res.render('shop-fullwidth-list');
});

router.get('/shop-right-sidebar',(req, res) =>{
    res.render('shop-right-sidebar');
});

router.get('/product-details',(req, res) =>{
    res.render('product-details');
});

router.get('/product-grouped',(req, res) =>{
    res.render('product-grouped');
});

router.get('/product-sidebar',(req, res) =>{
    res.render('product-sidebar');
});


router.get('/my-account',(req, res) =>{
    res.render('my-account');
});

router.get('/wishlist',(req, res) =>{
    res.render('wishlist');
});

router.get('/variable-product',(req, res) =>{
    res.render('variable-product');
});

export default router;
