const asyncHandler=require('express-async-handler')
const Goal=require('../models/goalModel')

const getGoals=asyncHandler(async (req,res)=>{
    const goals= await Goal.find()
    res.json(goals)  
})

const postGoal=asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("Please add a text feild")
    }
    const goal=await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)  
})

const updateGoal=asyncHandler(async (req,res)=>{

    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    const updatedgoal=await Goal.findOneAndUpdate(
        {_id: req.params.id},
        { $set: req.body}
    )
    
    res.status(200).json({goal,updatedgoal})
})

const deleteGoal=asyncHandler(async (req,res)=>{
    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    await goal.remove()
    res.json(req.params.id) 
})


module.exports={
    getGoals,postGoal,updateGoal,deleteGoal
}