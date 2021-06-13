const Product=require('../models/product');

// const products=[
//     {name:'Samsumg',price:3000, image:'1.jpg', description:'iyi telefon'},
//     {name:'Huawai',price:4000, image:'2.jpg', description:'güzel telefon'},
//     {name:'IPhone',price:5000, image:'3.jpg', description:'çok iyi telefon'},
//     {name:'Sony',price:6000, image:'4.jpg', description:'mükemmel telefon'}
// ];

exports.getProducts=(req, res, next) =>{
    const products=Product.getAll();
    res.render('index',
    {
        title: 'Home Page',
        products:products,
        path:'/' 
    });
}

exports.getAddProduct= (req, res, next) => {
    res.render('add-product',
    {
        title:'Add a New Product',
        path:'/admin/add-product'
    });
}

exports.postAddProduct=(req,res,next)=>{
    const product=new Product(
        req.body.name,
        req.body.price,
        req.body.imageUrl,
        req.body.description );
        product.saveProduct();
    res.redirect('/');
}