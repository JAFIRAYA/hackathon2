const exp = require('express');
const bp = require('body-parser');
const DB = require('./modules/db.js')
const knex = require('knex');


const db = knex({
    client:'pg',
    connection:{
      host: '127.0.0.1',
      port: '5432',
      user: 'postgres',
      password: 'ayaaya20045',
      database: 'hackathon',
      
    }
  })
  const app = exp();

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/',exp.static(__dirname+'/public'));
app.post('/user',(req,res)=>{
    console.log(req.body);
    DB.createUser(req.body)
    .then(data => {
      res.send({message:'Thank you'})
    })
    .catch(err => {
      res.send({message:err.detail})
    })



  })
  app.listen(3000)