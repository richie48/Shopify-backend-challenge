const express=require('express')
const res = require('express/lib/response')

const {createInventory,getAnInventory,
    getItem,
    deleteItem,
    updateItem}=require('../controllers/inventory')
router=express.Router()

router.route('/').get(getItem).post(createInventory)
router.route('/id').delete(deleteItem).get(getAnInventory).put(updateItem)




module.exports=router