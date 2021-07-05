const Product=require('../models/product');

// const products=[
//     {name:'Samsumg',price:3000, image:'1.jpg', description:'iyi telefon'},
//     {name:'Huawai',price:4000, image:'2.jpg', description:'güzel telefon'},
//     {name:'IPhone',price:5000, image:'3.jpg', description:'çok iyi telefon'},
//     {name:'Sony',price:6000, image:'4.jpg', description:'mükemmel telefon'}
// ];

exports.getIndex=(req, res, next) =>{
    const products=Product.getAll();
    res.render('shop/index',
    {
        title: 'Shopping',
        products:products,
        path:'/' 
    });
}

exports.getProducts=(req, res, next) =>{
    const products=Product.getAll();
    res.render('shop/products',
    {
        title: 'Products',
        products:products,
        path:'/products' 
    });
}

exports.getProduct=(req, res, next) =>{
    const productId=req.params.productid;
    console.log(Product.getById(productId));
    res.redirect('/');
}

exports.getProductDetails=(req, res, next) =>{
    const products=Product.getAll();
    res.render('shop/details',
    {
        title: 'Details',
        path:'/details' 
    });
}


exports.getCart=(req, res, next) =>{
    const products=Product.getAll();
    res.render('shop/cart',
    {
        title: 'Cart',
        path:'/cart' 
    });
}

exports.getOrders=(req, res, next) =>{
    const products=Product.getAll();
    res.render('shop/orders',
    {
        title: 'Orders',
        path:'/orders' 
    });
}
