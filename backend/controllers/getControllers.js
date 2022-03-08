const getGoals=(req,res)=>{
    res.json({message:"Goals got"})  
}

const postGoal=(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text feild")
    }
    res.status(200).json({message:"Goals posted"})  
}

const updateGoal=(req,res)=>{
    
    res.json({message:`Goals updated for ${req.params.id}`})
}

const deleteGoal=(req,res)=>{
    res.json({message:`Goals deleted for  ${req.params.id}`}) 
}


module.exports={
    getGoals,postGoal,updateGoal,deleteGoal
}