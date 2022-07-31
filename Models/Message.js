const mongooose=require("mongoose");

var messageSchema=mongooose.Schema({
    text:String,
    name:String,
    email:{
        type:String,
        required:true,
    },
});

var Message = mongooose.model("Message",messageSchema);
module.exports = Message;

