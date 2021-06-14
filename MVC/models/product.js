const products=[
    {name:'Samsumg',price:3000, imageUrl:'1.jpg', description:'iyi telefon'},
    {name:'Huawai',price:4000, imageUrl:'2.jpg', description:'güzel telefon'},
    {name:'IPhone',price:5000, imageUrl:'3.jpg', description:'çok iyi telefon'},
    {name:'Sony',price:6000, imageUrl:'4.jpg', description:'mükemmel telefon'}
];

module.exports =class Product{
    constructor(name,price,imageUrl, description){
        this.name=name;
        this.price=price;
        this.imageUrl=imageUrl;
        this.description=description;
    }
    saveProduct(){
        products.push(this);
    }
    static getAll(){
        return products;
    }
}

