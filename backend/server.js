const express=require("express")
const dotenv=require('dotenv').config()
const colors=require('colors')
const { errorHandler }= require('./middleware/errorMiddleware')
const connectDB=require('./config/db')
const Port=process.env.PORT
const app=express()

connectDB()


app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/api/goals',require('./routes/getRoutes'))
app.use(errorHandler)

app.listen(Port,()=>{
    console.log(`Server started at Port ${Port}`)
})