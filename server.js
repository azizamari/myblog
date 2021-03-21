const express =require('express');
const articlesRouter=require('./routes/articles');
const app=express();

app.set('view engine',"ejs")

app.use('/articles',articlesRouter);

app.get("/",(req,res)=>{
  const articles=[{
    title:'Test Title',
    createAt: Date.now(),
    description: 'Text Description'
  }]
  res.render('index',articles);
})

app.listen(5000)