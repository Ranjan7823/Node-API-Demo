const express=require('express');
const app =express();
//const morgan=require('morgan');

const productRoutes=require('./api/routes/products');
const orderRoutes=require('./api/routes/orders');
const userRoutes = require('./api/routes/user');


const bodyParser=require('body-parser');

const mongoose=require("mongoose");

//app.use(morgan,('dev'));

app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

// cors header setting 

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-ALlow-Headers",
                "Origin, X-Requested-With, Content-Type,Accept, Authorization"
    );
    if(req.method==="OPTIONS"){
        res.header("Access-Control-Allow-Methods","GET,POST,PUT");
         return res.status(200).json({

         })
     
    }
    next()

})


app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use("/user", userRoutes);
// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:'It works!'
//     })
// })
///// data base connection provider 

// var uri = 'mongodb://node-shop:" + process.env.MONGO_ATLAS_PW+"@<clustername>/<dbname>?ssl=true&replicaSet=<replica setname>&authSource=admin';
// mongoose.connect('mongodb+srv://userName:Passwrod@cluster.mongodb.net/', {dbName: 'yourDbName'});
// var db = mongoose.connect(uri).catch((error) => { console.log(error); });
// mongoose.connect("mongodb+srv://node-shop:" + process.env.MONGO_ATLAS_PW+"@cluster0-oauev.mongodb.net/test?retryWrites=true");

// mongoose.connect("mongodb+srv://node-shop:" + process.env.MONGO_ATLAS_PW+"@cluster0-jwmpl.mongodb.net/test?retryWrites=true")
app.use((req,res,next)=>{
    const error=new Error('Not found')
    error.status=404;
    next(error);
})

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
      error:{
          message: error.message
      }
  })
   
})
module.exports=app;