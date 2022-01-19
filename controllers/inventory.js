
exports.getInventories= async(req,res,err)=>{
    res.send('gotten inventories')
}

exports.getAnInventory= async(req,res,err)=>{
    res.send('gotten an inventory')
}

exports.createInventory=(req,res,err)=>{
    res.send('created an inventory')
}

exports.updateInventories=(req,res,err)=>{
    res.send('updated inventories')
}

exports.deleteInventories=(req,res,err)=>{
    res.send('deleted inventories')
}




