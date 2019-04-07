const mongoose= require("mongoose");
const dataBaseName="db_node_api";
mongoose.connect('mongodb://localhost/'+dataBaseName);

module.exports=mongoose;