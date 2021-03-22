const express =require('express');
const articlesRouter=require('./routes/articles');
const app=express();

app.set('view engine',"ejs")

app.use('/articles',articlesRouter);

app.get("/",(req,res)=>{
  const articles=[
    {
    title:'Test Title',
    createdAt: new Date(),
    description: 'Text Description'
  },
  {
    title:'Test Title6',
    createdAt: new Date(),
    description: 'Text Description'
  }
]
  res.render('articles/index',{articles:articles});
})

app.listen(5000)