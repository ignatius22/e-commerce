import express from 'express';
const router = express.Router;

router.get('/',(req,res) =>{
  res.render('adminView/badges')
})



export default router
