const service = require('../service/subject.service')


const create = (req, res) => {
    const nome = req.body.name
    const workload = req.body.workload
    const teacherName = req.body.teacherName

    if (nome && workload && teacherName) {
        service.create(req.body)
        res.send('201 - Criado com Sucesso')
    } else {
        res.send('404 - Erro na hora de validar')
    }
}

const listall = (req, res) => {
    res.send(service.listall())
}

const listarpeloid = (req, res) => {
    const bodyid = req.params.id
    const subjectid =service.database.findIndex(id2 => id2.id == bodyid)

    if (subjectid != -1) {
        res.send(service.database[subjectid])
    } else {
        res.send(`Id ${bodyid} invalido`)
    }
}

const update = (req, res) => {
    const bodyid = req.params.id

    const subjectid = service.database.findIndex(id2 => id2.id == bodyid)

    if(subjectid != -1) {
        service.update(req.body, subjectid, bodyid)
        res.send('200 - Atualizado com Sucesso')
    } else {
        res.send('404 -ID invalido')
    }
}

const remove = (req, res) => {
    const bodyid = req.params.id

    const subjectid = service.database.findIndex(id2 => id2.id == bodyid)

    if(subjectid != -1) {
        service.remove(subjectid)
        res.send('200 - Deletado Com Sucesso')
    } else {
        res.send('404 - Id invalido')
    }
}
module.exports = {
    create,
    listall,
    listarpeloid,
    update,
    remove
}
