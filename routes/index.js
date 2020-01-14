const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

const router = express.Router();
router.get('/', homeController.index);
router.get('/users/login', userController.login);
router.get('/users/register', userController.register);


// router.get('/', (req, res) => {
//   let obj = {
//     nome: req.query.nome,
//     idade: req.query.idade,
//     mostrar: true,
//     ingredientes: [
//       {nome: 'Arroz', qt: '20g'},
//       {nome: 'Macarrão', qt: '100g'},
//       {nome: 'Feijão', qt: '30g'},
//     ],
//     interesses: ['node', 'js', 'css'],
//     teste: '<strong>testando negrito</strong>'
//   }
//   res.render('home', obj);
// });

// router.get('/', (req, res) => {
//   // res.json(req.query);
  
//   // GET: req.query
//   // POST: req.body
//   // PARAMETROS DA URL: req.param

//     //SEND
//     //JSON

// //    res.send(`Olá, ${req.query.nome}, você tem ${req.query.idade} ano(s)`);
// });

//router.get('/posts/:id', (req, res) => {
//    let id = req.params.id;

//    res.send(`ID do post: ${id}`);
// router.get('/posts/:slug', (req, res) => {
//    let slug = req.params.slug;

//     // Titulo: seja bem vindo
//     // Slug: seja-bem-vindo

//    res.send(`SLUG do post: ${slug}`);
// });

// router.get('/sobre', (req, res) => {
//     res.send('Página SOBRE')
// });

module.exports = router;