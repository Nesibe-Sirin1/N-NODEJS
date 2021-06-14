const Product=require('../models/product');

// const products=[
//     {name:'Samsumg',price:3000, image:'1.jpg', description:'iyi telefon'},
//     {name:'Huawai',price:4000, image:'2.jpg', description:'güzel telefon'},
//     {name:'IPhone',price:5000, image:'3.jpg', description:'çok iyi telefon'},
//     {name:'Sony',price:6000, image:'4.jpg', description:'mükemmel telefon'}
// ];

exports.getProducts=(req, res, next) =>{
    const products=Product.getAll();
    res.render('admin/products',
    {
        title: ' Admin Products',
        products:products,
        path:'/admin/products' 
    });
}

exports.getAddProduct= (req, res, next) => {
    res.render('admin/add-product',
    {
        title:'New Product',
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

exports.getEditProduct= (req, res, next) => {
    res.render('admin/edit-product',
    {
        title:'Edit Product',
        path:'/admin/edit-product'
    });
}

exports.postEditProduct=(req,res,next)=>{
   
    res.redirect('/');
}