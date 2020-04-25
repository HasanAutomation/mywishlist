const express=require('express');
const path=require('path');
const bodyParser = require('body-parser')
const mongoose=require('mongoose');
const mon=require('./config/keys');
const Wish=require('./model/wish');
const app=express();
const routes=require('./routes')(app);
const port= process.env.PORT || 2000;

mongoose.connect(mon.mongoUrl,{useNewUrlParser:true,useUnifiedTopology:true});


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//serving static files
app.use('/static',express.static(path.join(__dirname,'static')));
app.use(express.urlencoded());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


// parse application/json
app.use(bodyParser.json())
app.get('/',(req,res)=>
{
    Wish.find({}).then(data=>{
    res.render('index',{wish:data})
    } 
    )
   
});
app.get('/home',(req,res)=>
{
    res.send('Hello world');
});
app.post('/',(req,res)=>{
    // console.log(req.body.item);
    // data.push(req.body.item);
    // res.send(data);
    const Item=new Wish({
        wish:req.body.item
    })
    Item.save().then((data)=>{
        res.send(data);
        console.log("Saved");
    }).catch(err=>{throw err});
})
app.delete('/remove/:id',(req,res)=>{
//     data=data.map(item=>{
//         if(item!=req.params.id)
//         return item;
//     })
// console.log(req.params.id);
// res.send(data);
Wish.findOneAndRemove({wish:req.params.id}).then(data=>{
    res.send(data);
})
})

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})