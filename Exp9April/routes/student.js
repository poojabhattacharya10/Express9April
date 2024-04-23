const express = require('express')
const router = express.Router()
router.get('/student/list' , (req,res)=>{
    console.log('Here is stu list ... ');
    res.end('<h1> I am fetching stu list </h1>')
})
module.exports = router