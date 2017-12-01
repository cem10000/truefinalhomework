const home = (req, res) => {
    res.render('index')
}

const pessoas = async (userModel, req, res) => {
    const result = await userModel.find({})

    res.render('pessoas/list', {result})
}

const form = (req, res) => {
    res.render('pessoas/create')
}

const cadastro = (userModel, req, res) => {
 
    const user = new userModel({
        nome: req.body.nome,
        nascimento: req.body.nascimento,
        profissao: req.body.profissao
    })

    user.save().then(res.redirect('/pessoas'))
}

const deleteUser = async (userModel, req, res) => {
    await userModel.remove({_id: req.params.id})
    res.redirect('/pessoas')
}

const editUser = async (userModel, req, res) => {

    await userModel.update({_id: req.params.id}, req.body)
    res.redirect('/pessoas')
}



module.exports = {
    home,
    pessoas,
    cadastro,
    form,
    deleteUser,
    editUser
}