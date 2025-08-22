const express = require("express")
const app = express()
const mongoose =require("mongoose")
const routesss = require("./droutes/routes")

const path = require("path")


                           
                             

app.set('view engine', 'pug');                           
app.set('views', path.join(__dirname, 'views'));         


app.use(express.urlencoded({extended:false}))

app.use("/", routesss)

mongoose.connect("mongodb+srv://slicksailer:3668nipplecum@cluster0.adpllhz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


app.listen(4000,()=>{
    console.log("listening on port 4000")
})