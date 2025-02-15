const deleteFile = require('../helpers/deleteFile')
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
async function updateProduct(req,res) {
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



async function deleteProduct(req,res){

    let {id} = req.params
    
    try {
        let product = await  productModel.findOneAndDelete({_id:id})

      product.image.forEach((item) => {
            deleteFile(`uploads/${item}`)
        });
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
  
    
    return res.status(201).send({success:true,message:'Product Deleted Successfully!'})
}
async function allProduct(req,res){

    
    try {
        let product = await  productModel.find()
        return res.status(201).send({
            success:true,
            data:product,
            message:'Product fetch successfully!'
        })
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
  
    
    
}
async function singleProduct(req,res){

    let {id} = req.params
    
    try {
        let product = await  productModel.find({_id:id})
        return res.status(201).send({
            success:true,
            data:product,
            message:'Single Product fetch successfully!'
        })
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
  
    
    
}


module.exports = {createProduct,singleProduct,allProduct,deleteProduct,updateProduct}