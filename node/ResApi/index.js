const express = require('express');
var cors=require("cors");
const app = express();
app.use(cors());


const static=require("./static.json");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
//const MONGO_URL = "//mongodb://localhost:27017/";
const MONGO_URL = "mongodb://127.0.0.1:27017";
let db;
const PORT=8900;
//console.log(static)
const user=[
  {
    name:'john',
    age:20
  },
  {
    name:'john-1',
    age:20,
  },
  {
    name:'john-2',
    age:20,
  },
];

app.get('/quick', function(req,res){
  //console.log(mealt)
  db.collection("mealType").find().toArray((err,client)=>{
  if(err)throw err;
  res.send(client);
  
});
});

app.get('/', function (req, res) {
  res.send('Hello World');
})
app.get('/userList', function (req, res) {
  res.send(user);
})
let arr=[];
app.get('/location/:stateId', function (req, res) {
  let query={};
  
  let stateId=req.params.stateId;
  //query={"state"}
  console.log(stateId)
  for(var i=0;i<static.length;i++){
    console.log(static[i].state,"===",stateId)
    console.log(static[i].state===stateId)
    if(static[i].state===stateId){
      console.log("in  ",stateId)
      let myObj = {};
      myObj=static[i];
      console.log(myObj);
      arr.push(myObj);
      console.log(arr);
    }
  }
  
    res.send(arr);
  });
 
app.get('/locations',function(req,res){
  db.collection("locations").find().toArray((err,client)=>{
    if(err) throw err;
    res.send(client);
  })
})

app.get('/restaurant', function (req, res) {

  let query = {};
  let stateId = Number(req.query.stateId);
  console.log("kllk",stateId)
  let mealId = Number(req.query.mealId);
  console.log(mealId);
  if (stateId) {
    query = { "state_id": stateId };
    console.log(query)
  } else if (mealId) {
    query = { "mealTypes.mealtype_id": mealId };
    console.log(query)
  }
  db.collection("restaurant").find(query).toArray((err,client)=>{
    if(err) throw err;
    res.send(client);
  });
 
})


app.get("/filter/:mealId", function(req,res){
  let query={};
  let mealId=Number(req.params.mealId);
  let cuisineId=Number(req.query.cuisineId);
  let lcost = Number(req.query.lcost);
  let hcost = Number(req.query.hcost);
  let sort = { cost: 1 };

 console.log("smdfmlsdmmfl")
  let flag=false;

  if (req.query.sort) {
    console.log("smdfmlsdmmfl")
    flag=true;
    console.log(flag)
    sort = { cost: Number(req.query.sort) };
    console.log(sort)
    console.log("smdfmlsdmmfl")
  }
  
  if (cuisineId) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id": cuisineId,
    };
  } else if (lcost && hcost){
    query={
      "mealTypes.mealtype_id": mealId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  }
  else if (cuisineId && lcost && hcost) {
    query = {
      "mealTypes.mealtype_id": mealId,
      "cuisines.cuisine_id": cuisineId,
      $and: [{ cost: { $gt: lcost, $lt: hcost } }],
    };
  }

 

  db.collection("restaurant").find(query).sort(sort).toArray((err,client)=>{
    if(err) throw err;
    res.send(client);
  });

});
  


app.get("/details/:resId", function(req,res){
  let query={};

 
  let resId=Number(req.params.resId);
  if(resId){
    query={
      "restaurant_id":resId,
    }
  }
 
console.log(query);
  db.collection("restaurant")
  .find(query)
  .toArray((err,client)=>{
    if(err) throw err;
    res.send(client);
  });

});

app.get("/me/:menuId", function(req,res){
  let query={};
  

 
  let menuId=Number(req.params.menuId);
  if(menuId){
    query={
      "restaurant_id":menuId,
    }
  }

console.log(query);
  db.collection("menu")
  .find(query)
  .toArray((err,client)=>{
    if(err) throw err;
    res.send(client);
  });

});



app.post("/menuItem", express.json(), function (req, res) {
  if (Array.isArray(req.body)) {
    db.collection("menu")
      .find({ menu_id: { $in: req.body } })
      .toArray((err, result) => {
        if (err) throw err;
        res.send(result);
      });
  } else {
    res.send("Invalid Input");
  }
});


app.get("/orders", function(req,res){
  let query={};
  let email=req.query.email;
  if(email)
    query={"email":email}
  

  db.collection("order").find(query).toArray((err,result)=>{
    if(err)throw err;
    res.send(result);
  });

})

app.post("/placeOrder", express.json(),function (req, res) {
  console.log(req.body);
  db.collection("order").insertOne(req.body, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.put("/update/:id", function (req, res) {
  let oid = Number(req.params.id);
  console.log(req.body)
  db.collection("users").updateOne(
    { orderId: oid } ,
    {
      $set: {
        status: req.body.status,
        bank_name: req.body.bank_name,
        date: req.body.date,
      },
    },
    (err, result) => {
      if (err) throw err;
      res.send("Order updated successfully");
    }
  );
});

app.delete("/deleteOrder/:id",express.json(), function (req, res) {

  let oid = Number(req.params.id);
  console.log(typeof oid)
  console.log(req.body)
  
 // console.log(query)
  db.collection("order").deleteOne({orderId : oid }, (err, result) => {
    if (err) throw err;
    res.send("Order deleted successfully");
  });
});

MongoClient.connect(MONGO_URL, (err, client) => {
  console.log("Mongodb is connected");
  if (err) console.log("Error while connecting");
  db = client.db("zomato");
  app.listen(PORT, () => console.log("Server started on the port", PORT));
});
