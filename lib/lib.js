const pg = require("pg");

const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/ravindj';
const client = new pg.Client(connectionString);
client.connect();

const lib = {};

lib.addInfo = function(req,res){
  let name = req.body.name;
  let password = req.body.password;
  if(name.trim()!=""){
    client.query(`insert into person(name, password) values($1,$2)`,[name,password],(err)=>{
      if(err){
        console.log(err);
      }
    });
    res.redirect('/home.html');
    return;
  }
  res.send({error: 'Invalid form submission'});
}

lib.fetch = function(req,res){
  let name = req.body.username;
  if(name.trim()){
    client.query(`select * from person where name=$1`,[name],(err, data)=>{
      if(err){
        res.end("not found");
        return;
      }
      res.end(JSON.stringify(data));
      return;
    });
  }else{
  res.send({error: 'Invalid form submission'});
  }
}

module.exports = lib;
