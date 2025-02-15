
 const categoryModel = require("../model/categoryModel")
const fs = require('fs')

async function createcategory(req,res){

    let {name,image,description,} = req.body
    
    let category = new categoryModel({
        name:name,
        description:description,
        image:req.file.filename
    });

    await category.save()
    return res.status(201).send({success:true,message:'Category Created Successfully!'})
}
async function deleteCategory(req,res){

    let {id} = req.params
    
    try {
        let category = await  categoryModel.findOneAndDelete({_id:id})
        fs.unlink(`uploads/${category.image}`,(err) => {
            if(err){
                return res.status(500).send({success:false,message:err.message}) 
            }
        })
    } catch (error) {
        return res.status(500).send({success:false,message:error.message})
    }
  
    
    return res.status(201).send({success:true,message:'Category Deleted Successfully!'})
}

module.exports ={ createcategory,deleteCategory};