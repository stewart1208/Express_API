const router = require('express').Router()
const amountController = require('../Controllers/amountController')

router.post('/:id',amountController.paying)
router.get('/',amountController.getAllAmounts)
router.get('/:id',amountController.getByStudent)

module.exports=router