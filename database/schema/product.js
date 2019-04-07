const mongoose= require('../db_connection');

const productSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type :String,required :true},
    price:Number,
    createdDate:{type:Date, default: Date.now}
});

const Products=mongoose.model('Product',productSchema);
module.exports=Products;