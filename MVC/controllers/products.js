const products=[
    {name:'Samsumg',price:3000, image:'1.jpg', description:'iyi telefon'},
    {name:'Huawai',price:4000, image:'2.jpg', description:'güzel telefon'},
    {name:'IPhone',price:5000, image:'3.jpg', description:'çok iyi telefon'},
    {name:'Sony',price:6000, image:'4.jpg', description:'mükemmel telefon'}
];

exports.getProducts=(req, res, next) =>{
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
    products.push(
        {
            name:req.body.name,
            price:req.body.price,
            image:req.body.image,
            description:req.body.description
        }
    );
    console.log(req.body)
    res.redirect('/');
}