import express from 'express'
const router = express.Router()




router.get('/badges', function(req, res) {
    res.render('adminView/badges', {layout: 'farmView.handlebars'});
});


router.get('/error-404', function (req, res) {
  res.render('adminView/404', { layout: 'farmView.handlebars' });
});

router.get('/app-tour', function (req, res) {
  res.render('adminView/app-tour', { layout: 'farmView.handlebars' });
});

router.get('/error-500', function (req, res) {
  res.render('adminView/500', { layout: 'farmView.handlebars' });
});


router.get('/error-505', function (req, res) {
  res.render('adminView/505', { layout: 'farmView.handlebars' });
});

router.get('/accordion', function (req, res) {
  res.render('adminView/accordion', { layout: 'farmView.handlebars' });
});

router.get('/alert', function (req, res) {
  res.render('adminView/alert', { layout: 'farmView.handlebars' });
});

router.get('/am-maps', function (req, res) {
  res.render('adminView/am-maps', { layout: 'farmView.handlebars' });
});

router.get('/basic-table', function (req, res) {
  res.render('adminView/basic-table', { layout: 'farmView.handlebars' });
});

router.get('/blank', function (req, res) {
  res.render('adminView/blank', { layout: 'farmView.handlebars' });
});

router.get('/buttons', function (req, res) {
  res.render('adminView/buttons', { layout: 'farmView.handlebars' });
});

router.get('/c3-chart', function (req, res) {
  res.render('adminView/c3-chart', { layout: 'farmView.handlebars' });
});

router.get('/cards', function (req, res) {
  res.render('adminView/cards', { layout: 'farmView.handlebars' });
});

router.get('/carousel', function (req, res) {
  res.render('adminView/carousel', { layout: 'farmView.handlebars' });
});

router.get('/chart-js', function (req, res) {
  res.render('adminView/chart-js', { layout: 'farmView.handlebars' });
});

router.get('/chartlist', function (req, res) {
  res.render('adminView/chartlist', { layout: 'farmView.handlebars' });
});

router.get('/code-editor', function (req, res) {
  res.render('adminView/code-editor', { layout: 'farmView.handlebars' });
});

router.get('/compose', function (req, res) {
  res.render('adminView/compose', { layout: 'farmView.handlebars' });
});

router.get('/cropper', function (req, res) {
  res.render('adminView/cropper', { layout: 'farmView.handlebars' });
});

router.get('/datatable', function (req, res) {
  res.render('adminView/datatable', { layout: 'farmView.handlebars' });
});

router.get('/dropdown', function (req, res) {
  res.render('adminView/dropdown', { layout: 'farmView.handlebars' });
});

router.get('/dropzone', function (req, res) {
  res.render('adminView/dropzone', { layout: 'farmView.handlebars' });
});

router.get('/et-line', function (req, res) {
  res.render('adminView/et-line', { layout: 'farmView.handlebars' });
});

router.get('/fontawesome', function (req, res) {
  res.render('adminView/fontawesome', { layout: 'farmView.handlebars' });
});

router.get('/forgot-password', function (req, res) {
  res.render('adminView/forgot-password', { layout: 'farmView.handlebars' });
});

router.get('/form-basic', function (req, res) {
  res.render('adminView/form-basic', { layout: 'farmView.handlebars' });
});

router.get('/form-groups', function (req, res) {
  res.render('adminView/form-groups', { layout: 'farmView.handlebars' });
});

router.get('/form-layouts', function (req, res) {
  res.render('adminView/form-layouts', { layout: 'farmView.handlebars' });
});


router.get('/form-validation', function (req, res) {
  res.render('adminView/form-validation', { layout: 'farmView.handlebars' });
});

router.get('/full-calender', function (req, res) {
  res.render('adminView/full-calender', { layout: 'farmView.handlebars' });
});

router.get('/gallery', function (req, res) {
  res.render('adminView/gallery', { layout: 'farmView.handlebars' });
});


router.get('/google-maps', function (req, res) {
  res.render('adminView/google-maps', { layout: 'farmView.handlebars' });
});

router.get('/grid', function (req, res) {
  res.render('adminView/grid', { layout: 'farmView.handlebars' });
});

router.get('/inbox', function (req, res) {
  res.render('adminView/inbox', { layout: 'farmView.handlebars' });
});


router.get('/index2', function (req, res) {
  res.render('adminView/index2', { layout: 'farmView.handlebars' });
});

router.get('/index3', function (req, res) {
  res.render('adminView/index3', { layout: 'farmView.handlebars' });
});

router.get('/invoice', function (req, res) {
  res.render('adminView/invoice', { layout: 'farmView.handlebars' });
});

router.get('/ionicons', function (req, res) {
  res.render('adminView/ionicons', { layout: 'farmView.handlebars' });
});

router.get('/js-grid', function (req, res) {
  res.render('adminView/js-grid', { layout: 'farmView.handlebars' });
});

router.get('/loaders', function (req, res) {
  res.render('adminView/loaders', { layout: 'farmView.handlebars' });
});


router.get('/ladda-button', function (req, res) {
  res.render('adminView/ladda-button', { layout: 'farmView.handlebars' });
});


router.get('/list-group', function (req, res) {
  res.render('adminView/list-group', { layout: 'farmView.handlebars' });
});


router.get('/lock', function (req, res) {
  res.render('adminView/lock', { layout: 'farmView.handlebars' });
});


router.get('/login', function (req, res) {
  res.render('adminView/login', { layout: 'farmView.handlebars' });
});


router.get('/modals', function (req, res) {
  res.render('adminView/modals', { layout: 'farmView.handlebars' });
});

router.get('/morris-charts', function (req, res) {
  res.render('adminView/morris-charts', { layout: 'farmView.handlebars' });
});


router.get('/pagination', function (req, res) {
  res.render('adminView/pagination', { layout: 'farmView.handlebars' });
});

router.get('/pricing', function (req, res) {
  res.render('adminView/pricing', { layout: 'farmView.handlebars' });
});

router.get('/profile', function (req, res) {
  res.render('adminView/profile', { layout: 'farmView.handlebars' });
});


router.get('/progressbar', function (req, res) {
  res.render('adminView/progressbar', { layout: 'farmView.handlebars' });
});


router.get('/read-mail', function (req, res) {
  res.render('adminView/read-mail', { layout: 'farmView.handlebars' });
});


//got some issues with this line

router.get('/registeration', function (req, res) {
  res.render('adminView/register', { layout: 'farmView.handlebars' });
});

router.get('/reset-password', function (req, res) {
  res.render('adminView/reset-password', { layout: 'farmView.handlebars' });
});


router.get('/sweet-notification', function (req, res) {
  res.render('adminView/sweet-notification', { layout: 'farmView.handlebars' });
});

router.get('/tabs', function (req, res) {
  res.render('adminView/tabs', { layout: 'farmView.handlebars' });
});

router.get('/themify', function (req, res) {
  res.render('adminView/themify', { layout: 'farmView.handlebars' });
});

router.get('/timeline', function (req, res) {
  res.render('adminView/timeline', { layout: 'farmView.handlebars' });
});

router.get('/toastr', function (req, res) {
  res.render('adminView/toastr', { layout: 'farmView.handlebars' });
});

router.get('/typography', function (req, res) {
  res.render('adminView/typography', { layout: 'farmView.handlebars' });
});


export default router;
