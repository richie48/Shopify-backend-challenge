
exports.getItem= async(req,res,err)=>{
    res.send('gotten item')
}

exports.getAnItem= async(req,res,err)=>{
    res.send('gotten an Item')
}

exports.createItem=(req,res,err)=>{
    res.send('created an Item')
}

exports.updateItem=(req,res,err)=>{
    res.send('updated item')
}

exports.deleteItem=(req,res,err)=>{
    res.send('deleted item')
}




