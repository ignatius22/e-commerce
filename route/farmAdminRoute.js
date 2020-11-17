import express from 'express';
const router = express.Router();

router.get('/home', (req, res) => {
  res.render('adminFarm/index', {
    layout: 'admin'
  });
});


router.get('/accordion', (req, res) => {
  res.render('adminFarm/accordion', {
    layout: 'admin',
  });
});

router.get('/badges', (req, res) => {
  res.render('adminFarm/badges', {
    layout: 'admin',
  });
});

router.get('/login', (req, res) => {
  res.render('adminFarm/login', {
    layout: 'admin',
  });
});


router.get('/table', (req, res) => {
  res.render('adminFarm/basic-table', {
    layout: 'admin',
  });
});

router.get('/blank', (req, res) => {
  res.render('adminFarm/blank', {
    layout: 'admin',
  });
});

router.get('/alert', (req, res) => {
  res.render('adminFarm/alert', {
    layout: 'admin',
  });
});

router.get('/am-maps', (req, res) => {
  res.render('adminFarm/am-maps', {
    layout: 'admin',
  });
});

router.get('/app-tour', (req, res) => {
  res.render('adminFarm/app-tour', {
    layout: 'admin',
  });
});

router.get('/buttons', (req, res) => {
  res.render('adminFarm/buttons', {
    layout: 'admin',
  });
});

router.get('/c3-chart', (req, res) => {
  res.render('adminFarm/c3-chart', {
    layout: 'admin',
  });
});

router.get('/cards', (req, res) => {
  res.render('adminFarm/cards', {
    layout: 'admin',
  });
});

router.get('/carousel', (req, res) => {
  res.render('adminFarm/carousel', {
    layout: 'admin',
  });
});

router.get('/chart-js', (req, res) => {
  res.render('adminFarm/chart-js', {
    layout: 'admin',
  });
});

router.get('/chartlist', (req, res) => {
  res.render('adminFarm/chartlist', {
    layout: 'admin',
  });
});

router.get('/code-editor', (req, res) => {
  res.render('adminFarm/code-editor', {
    layout: 'admin',
  });
});

router.get('/compose', (req, res) => {
  res.render('adminFarm/compose', {
    layout: 'admin',
  });
});

router.get('/cropper', (req, res) => {
  res.render('adminFarm/cropper', {
    layout: 'admin',
  });
});

router.get('/datatable', (req, res) => {
  res.render('adminFarm/datatable', {
    layout: 'admin',
  });
});

router.get('/dropdown', (req, res) => {
  res.render('adminFarm/dropdown', {
    layout: 'admin',
  });
});

router.get('/dropzone', (req, res) => {
  res.render('adminFarm/dropzone', {
    layout: 'admin',
  });
});

router.get('/et-line', (req, res) => {
  res.render('adminFarm/et-line', {
    layout: 'admin',
  });
});

router.get('/font-awesome', (req, res) => {
  res.render('adminFarm/font-awesome', {
    layout: 'admin',
  });
});

router.get('/forgot-password', (req, res) => {
  res.render('adminFarm/forgot-password', {
    layout: 'admin',
  });
});


router.get('/form-basic', (req, res) => {
  res.render('adminFarm/form-basic', {
    layout: 'admin',
  });
});

router.get('/form-groups', (req, res) => {
  res.render('adminFarm/form-groups', {
    layout: 'admin',
  });
});

router.get('/form-layouts', (req, res) => {
  res.render('adminFarm/form-layouts', {
    layout: 'admin',
  });
});

router.get('/form-validation', (req, res) => {
  res.render('adminFarm/form-validation', {
    layout: 'admin',
  });
});

router.get('/full-callender', (req, res) => {
  res.render('adminFarm/full-calender', {
    layout: 'admin',
  });
});

router.get('/gallery', (req, res) => {
  res.render('adminFarm/gallery', {
    layout: 'admin',
  });
});

router.get('/google-maps', (req, res) => {
  res.render('adminFarm/google-maps', {
    layout: 'admin',
  });
});


router.get('/grid', (req, res) => {
  res.render('adminFarm/grid', {
    layout: 'admin',
  });
});

router.get('/inbox', (req, res) => {
  res.render('adminFarm/inbox', {
    layout: 'admin',
  });
});

router.get('/index2', (req, res) => {
  res.render('adminFarm/index2', {
    layout: 'admin',
  });
});

router.get('/index3', (req, res) => {
  res.render('adminFarm/index3', {
    layout: 'admin',
  });
});

router.get('/ionicons', (req, res) => {
  res.render('adminFarm/ionicons', {
    layout: 'admin',
  });
});

router.get('/js-grid', (req, res) => {
  res.render('adminFarm/js-grid', {
    layout: 'admin',
  });
});

router.get('/ladda-button', (req, res) => {
  res.render('adminFarm/ladda-button', {
    layout: 'admin',
  });
});

router.get('/list-group', (req, res) => {
  res.render('adminFarm/list-group', {
    layout: 'admin',
  });
});

router.get('/loaders', (req, res) => {
  res.render('adminFarm/loaders', {
    layout: 'admin',
  });
});

router.get('/lock', (req, res) => {
  res.render('adminFarm/lock', {
    layout: 'admin',
  });
});

router.get('/modals', (req, res) => {
  res.render('adminFarm/modals', {
    layout: 'admin',
  });
});

router.get('/morris-chart', (req, res) => {
  res.render('adminFarm/morris-charts', {
    layout: 'admin',
  });
});

router.get('/pagination', (req, res) => {
  res.render('adminFarm/pagination', {
    layout: 'admin',
  });
});

router.get('/pagination', (req, res) => {
  res.render('adminFarm/pagination', {
    layout: 'admin',
  });
});

router.get('/popover', (req, res) => {
  res.render('adminFarm/popover', {
    layout: 'admin',
  });
});

router.get('/pricing', (req, res) => {
  res.render('adminFarm/pricing', {
    layout: 'admin',
  });
});
router.get('/profile', (req, res) => {
  res.render('adminFarm/profile', {
    layout: 'admin',
  });
});

router.get('/progressbar', (req, res) => {
  res.render('adminFarm/progressbar', {
    layout: 'admin',
  });
});

router.get('/read-mail', (req, res) => {
  res.render('adminFarm/read-mail', {
    layout: 'admin',
  });
});

router.get('/register', (req, res) => {
  res.render('adminFarm/register', {
    layout: 'admin',
  });
});


router.get('/reset-password', (req, res) => {
  res.render('adminFarm/reset-password', {
    layout: 'admin',
  });
});

router.get('/sweet-notification', (req, res) => {
  res.render('adminFarm/sweet-notification', {
    layout: 'admin',
  });
});

router.get('/tabs', (req, res) => {
  res.render('adminFarm/tabs', {
    layout: 'admin',
  });
});

router.get('/text-editor', (req, res) => {
  res.render('adminFarm/text-editor', {
    layout: 'admin',
  });
});

router.get('/themify', (req, res) => {
  res.render('adminFarm/themify', {
    layout: 'admin',
  });
});

router.get('/timeline', (req, res) => {
  res.render('adminFarm/timeline', {
    layout: 'admin',
  });
});


router.get('/toastr', (req, res) => {
  res.render('adminFarm/toastr', {
    layout: 'admin',
  });
});

router.get('/typography', (req, res) => {
  res.render('adminFarm/typography', {
    layout: 'admin',
  });
});

export default router;
