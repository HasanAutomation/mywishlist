


module.exports=(app)=>{

// app.get('/profile/:id',(req,res)=>{
//     res.send("You requested for user "+req.params.id);
// })

app.get('/about',(req,res)=>{
    res.render('about');
})

}