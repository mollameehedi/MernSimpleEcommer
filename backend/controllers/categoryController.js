
 const categoryModel = require("../model/categoryModel")

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

module.exports ={ createcategory};