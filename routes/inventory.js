const express=require('express')

const {createItem,getAnItem,
    getItem,
    deleteItem,
    updateItem,
    itemWithCount}=require('../controllers/inventory')
router=express.Router()

router.route('/').get(getItem).post(createItem)
router.route('/:id').delete(deleteItem).get(getAnItem).put(updateItem)
router.route('/qty/:qty').get(itemwithCount)


module.exports=router