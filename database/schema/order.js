const mongoose= require('../db_connection');

// const orderSchema=mongoose.Schema({
//     _id:mongoose.Schema.Types.ObjectId,
//     // product:{type: mongoose.Schema.Types.ObjectId,ref:"Product"},
//     quantity:{type:Number}
// })

// const Orders=mongoose.model("OrderTb",orderSchema);
// module.export=Orders;


const orderSchema=mongoose.Schema({
    // _id:mongoose.Schema.Types.ObjectId,
    // name:String,
    // quantity:{type:Number}
    _id:mongoose.Schema.Types.ObjectId,
     product:{type: mongoose.Schema.Types.ObjectId,ref:"Product"},
     quantity:{type:Number}
})

const OrderNew=mongoose.model("orderTbl",orderSchema);
module.exports=OrderNew;

