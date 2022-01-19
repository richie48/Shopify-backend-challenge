const Item=require('../models/Inventory')

exports.getItem= async(req,res,err)=>{
    try {
        const item = await Item.find();
    
        res.status(200).json(item);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
    };

exports.getAnItem= async(req,res,err)=>{
    const id=req.params.id
    try {
        const item = await Item.findById(id);
    
        res.status(200).json(item);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
}

exports.createItem= async(req,res,err)=>{
    const body = req.body;
    const item = new Item(body)
  try {
    await item.save();
    res.status(201).json(item);
  } catch (error) {
    console.log(error.message)
    res.status(409).json({ message: error.message });
  }
}

exports.updateItem= async(req,res,err)=>{
    try {
        const body= req.body
        const found_id = req.params.id
    
        //how we know that the body is not empty and have found the product
        if (!body){
          res.status(401).json({error:"updated information empty"})
        }
        const found_item= await Item.findById(found_id)
        if (!found_item){
          res.status(404).send("This product does not exist")
      }
        const updatedItem = await Item.findByIdAndUpdate(req.params.id,body,{new:true})
        res.status(201).json(updatedItem)
        
      } catch (error) {
        res.status(401).send({error:error.message})
      }
}

exports.deleteItem=async(req,res,err)=>{
    const found_id=req.params.id
    const found_item= await Item.findOne({_id:found_id})
  try {
    //Provided the user was found
    await Item.deleteOne({_id:found_id})
    res.status(201).json({success:true,data:[]})
    
  } catch (error) {
    res.status(401).json({error:error.message})
  }
}


//filtering based on inventory count...

exports.itemWithCount=async(req,res,err)=>{
    const quantity=req.params.qty
    try {
        const item = await Item.find(quantity);
    
        res.status(200).json(item);
      } catch (error) {
        res.status(404).json({ message: error.message });
      }
}





