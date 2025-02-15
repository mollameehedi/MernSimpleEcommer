
 const categoryModel = require("../model/categoryModel")
 const fs = require('fs')
 const deleteFile = require("../helpers/deleteFile");

async function createcategory(req,res){

    let {name,image,description,} = req.body
    
    let category = new categoryModel({
        name:name,
        description:description,
        image:req.file.filename
    });

    await category.save()
    return res.status(201).send({success:true,data:category,message:'Category Created Successfully!'})
}

async function updateCategory(req,res){

    let {name,image,description,} = req.body
    let {id} = req.params
    try {
        let category = await categoryModel.findOneAndUpdate({_id:id},{
            name,description,
            image:req.file.filename
        });

        if(req.file){
            await deleteFile(`uploads/${category.image}`)
        }

         
    return res.status(201).send({success:true,data:category,message:'Category Updated Successfully!'})
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
   
}

async function deleteCategory(req,res){

    let {id} = req.params
    
    try {
        let category = await  categoryModel.findOneAndDelete({_id:id})
        await deleteFile(`uploads/${category.image}`)
        
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
  
    
    return res.status(201).send({success:true,message:'Category Deleted Successfully!'})
}
async function allCategory(req,res){

    
    try {
        let category = await  categoryModel.find()
        return res.status(201).send({
            success:true,
            data:category,
            message:'Category fetch successfully!'
        })
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
  
    
    
}
async function singleCategory(req,res){

    let {id} = req.params
    
    try {
        let category = await  categoryModel.find({_id:id})
        return res.status(201).send({
            success:true,
            data:category,
            message:'Single Category fetch successfully!'
        })
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
  
    
    
}

module.exports ={ createcategory,deleteCategory,allCategory,singleCategory,updateCategory};