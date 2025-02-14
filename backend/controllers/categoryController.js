

async function createcategory(req,res){

    let {name,image,description,} = req.body

    return res.send(req.file);
}

module.exports ={ createcategory};