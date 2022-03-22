const express=require('express')
const { getGoals, postGoal, updateGoal, deleteGoal } = require('../controllers/getControllers')
const router=express.Router()
const {protect} =require('../middleware/authUser')

router.route('/').get(protect,getGoals).post(protect,postGoal)

router.route('/:id').delete(protect,deleteGoal).put(protect,updateGoal)

module.exports=router