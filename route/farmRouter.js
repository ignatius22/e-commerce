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

export default router;
