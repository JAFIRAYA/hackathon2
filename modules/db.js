const knex = require('knex');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const db = knex({
    client:'pg',
    connection:{
      host: '127.0.0.1',
      port: '5432',
      user: 'postgres',
      password: 'ayaaya20045',
      database: 'hackathon'
    }
  })

  function createUser({name,
    phone,
    email,
    message}){
    const salt = bcrypt.genSaltSync(saltRounds);
  
    return db('enregistrement').insert(
      {
        nom:name,
        telephone:bcrypt.hashSync(phone, salt),
        email:bcrypt.hashSync(email, salt),
        message:message

      }
    )
    .returning('*')
  }
  
  module.exports = {
    createUser
  }