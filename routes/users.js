const router = require("express").Router();
const ctrl = require("../controllers");

// routes

router.get("/", ctrl.users.index);

// //login handle
// router.get('/login',(req,res)=>{
//     res.render('login');
// })
// router.get('/register',(req,res)=>{
//     res.render('register')
//     })
// //Register handle
// router.post('/register',(req,res)=>{
// })
// router.post('/login',(req,res,next)=>{
//   })

// //logout
// router.get('/logout',(req,res)=>{
//  })

module.exports = router;