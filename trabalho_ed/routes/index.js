const router = require("express").Router()
const indexController = require("../controller/index")
const userModel = require("../model/user")

router.get('/', indexController.home)

router.get('/cadastrar', indexController.form)
router.post('/cadastrar', indexController.cadastro.bind(null, userModel))

router.get('/pessoas', indexController.pessoas.bind(null, userModel))

router.get('/pessoas/delete/:id', indexController.deleteUser.bind(null, userModel))

router.post('/pessoas/edit/:id', indexController.editUser.bind(null, userModel))




module.exports = router