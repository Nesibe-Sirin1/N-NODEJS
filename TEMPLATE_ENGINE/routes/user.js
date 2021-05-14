const express =require('express');
const router=express.Router();
const path=require('path');

router.get('/', (req, res, next) => {
    const products=[
        {name:'Samsumg',price:3000, image:'1.jpg', description:'iyi telefon'},
        {name:'Huawai',price:4000, image:'2.jpg', description:'güzel telefon'},
        {name:'IPhone',price:5000, image:'3.jpg', description:'çok iyi telefon'},
        {name:'Sony',price:6000, image:'4.jpg', description:'mükemmel telefon'}
    ]
    res.render('index',{title: 'Home Page',products:products});
});


module.exports=router;
