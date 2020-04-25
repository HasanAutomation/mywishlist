const mongoose=require('mongoose');

const WishSchema=new mongoose.Schema({
    wish:String
});

module.exports=mongoose.model('wishList',WishSchema);