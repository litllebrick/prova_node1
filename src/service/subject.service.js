const database = []

var id=1

//Post
const create = subject => {
    subject.id=id
    database.push(subject)
    id=id+1
}

//Get
const listall = () => database

//Put
const update = (subject, index, id) => {
    subject.id = id
    database[index] = subject
}

//Remove
const remove = (index) => {
    database.splice(index, 1)
}




module.exports={
    create,
    listall,
    update,
    remove,
    database
}




