const express =require('express');
const router=express.Router();

const products=[
    {name:'Samsumg',price:3000, image:'1.jpg', description:'iyi telefon'},
    {name:'Huawai',price:4000, image:'2.jpg', description:'güzel telefon'},
    {name:'IPhone',price:5000, image:'3.jpg', description:'çok iyi telefon'},
    {name:'Sony',price:6000, image:'4.jpg', description:'mükemmel telefon'}
]

router.get('/add-product', (req, res, next) => {
    res.render('add-product',{title:'Add a New Product'});
});



router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    products.push({name:req.body.name, price:req.body.price, image:req.body.image, description:req.body.description});
    res.redirect('/');
});

exports.routes=router;
exports.products=products;