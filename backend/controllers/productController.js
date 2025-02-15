const productModel = require('../model/productModel')

async function createProduct(req,res) {
    let {name,description,category,stock,sellingPrice,discountPrice} = req.body
    
    let images = req.files.map((item) => `/${item.filename}`)
    
    try {
    let product = new productModel({
        name,description,category,stock,sellingPrice,discountPrice,image:images
    })
    
    await product.save()
} catch (error) {
    return res.status(500).send({success:false,message:error.message})
}
return res.status(201).send({success:true,message:'Product Created Successfully!'})
}


module.exports = {createProduct}