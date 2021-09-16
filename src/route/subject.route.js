const express=require('express')
const router = express.Router()
const controller=require('../controller/subject.controller')

router.post('/', controller.create)
router.get('/',controller.listall)
router.get('/:id',controller.listarpeloid)
router.put('/:id', controller.update)
router.delete('/:id',controller.remove)


module.exports=router