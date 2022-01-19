const mongoose=require('mongoose')


const itemSchema=new mongoose.Schema({
    name:{type:String},
    description:{type:String},
    quantity:{
        type:String,
        default:1},
    createdAt:{
        type: Date,
        default: Date.now,
      },    
})

module.exports = mongoose.model('Item', itemSchema);