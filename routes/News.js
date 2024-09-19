const express = require('express');

const router = express.Router();

const categories = ["Entertainment","Local news","Politics","Sports","Education","Health","Crime"]

router.get('/',(req,res)=>{
   return res.render('index')
})


router.post('/news',async (req,res)=>{
      
    try{
          var url = `http://newsapi.org/v2/everything?q=${req.body.search}&apiKey=36f3e29b704f41339af8439dc1228334`;
         
          const data = await fetch(url);

          const result = await data.json();
      
        res.render("index",{data:result.articles,List:categories});

       

    }catch(err){
        console.log(err)
    }

       

})

module.exports = router;