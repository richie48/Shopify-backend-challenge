const express=require('express')

const {createItem,getAnItem,
    getItem,
    deleteItem,
    updateItem}=require('../controllers/inventory')
router=express.Router()

router.route('/').get(getItem).post(createItem)
router.route('/:id').delete(deleteItem).get(getAnItem).put(updateItem)




module.exports=router