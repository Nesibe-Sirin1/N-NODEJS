const express = require('express');
const app = express();
const path=require('path');

app.set('view engine','pug');
app.set('views','./views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));

const adminRoutes=require('./routes/admin');
app.use('/admin',adminRoutes);

const userRoutes=require('./routes/user');
app.use(userRoutes);

app.use((req,res) =>{
    res.status(404);
    res.render('404');
});

app.listen(3000,()=>{
    console.log("listening on port 3000");
});
