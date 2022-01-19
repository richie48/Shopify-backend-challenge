const express=require('express')
const res = require('express/lib/response')

const {createInventory,getAnInventory,
    getInventories,
    deleteInventories,
    updateInventories}=require('../controllers/inventory')
router=express.Router()

router.route('/').get(getInventories).post(createInventory)
router.route('/id').delete(deleteInventories).get(getAnInventory).put(updateInventories)




module.exports=router