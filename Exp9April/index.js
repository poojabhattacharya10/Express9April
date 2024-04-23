const express = require('express')
const app = express()
const stu = require('./routes/student')
app.use(stu)
// app.get('/' , (req,res) => {
//     res.end('<h1> Hello from server ... </h1>')
// })
// app.get('/contact' , (req,res) => {
//     res.end('<h1> Hello from contact ... </h1>')
// })
// app.get('/simpleinterest/:principal/:rate/:time' , (req,res) => {
//     console.log('Cal SI ::: ');
//     let principal = req.params.principal
//     let rate = req.params.rate
//     let time = req.params.time
//     // console.log(principal ,'principal');
//     // console.log(rate , 'rate');
//     // console.log(time , 'time');
//     let si = ( principal * rate * time ) / 100
//     res.end('<h1> simple interest ... </h1>' + si)
// })
// app.get('/cal/area/rectangle/:length/:width' ,  (req,res) => {
//     console.log("Cal area of rectangle");
//     let length = req.params.length
//     let width = req.params.width
//     let area = length * width
//     res.end('<h1> Area of rectangle ... </h1>' + area)
// })
// app.get('*' , (req,res) => {
//     res.end('<h1> Hello from all ... </h1>')
// })
app.listen(3000,(err)=>{
    if(err){ 
        console.log(err);
    }
    else{
        console.log('server is running ....');
    }
})