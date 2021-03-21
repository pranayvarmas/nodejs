// /routes/productRoutes.js

//import React, { useState, useEffect } from "react";
const mongoose = require('mongoose');
const Product = mongoose.model('products');
//console.log(vg);
//const f=localStorage.getItem("cid");
/*let msg = new Product({
  name:"P1",
  description:"D1"})
msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })*/
module.exports = (app) => {

  app.get(`/api/product/:str/:t`, async (req, res) => {
    //alert("hi");
    const {str}=req.params;
    //console.log(str);
    const {t}=req.params;
    //t=0;
    if (t=="0"){
      console.log("lk");
    let products = await Product.find({cid:str});
    return res.status(200).send(products);
    }
    if (t=="1"){
     let products = await Product.find({cid:str});

     let s=await Product.find({city:products[0].city});
     console.log(s);
    return res.status(200).send(s); 
    }
    if (t=="2"){
      console.log("lk");
    let products = await Product.find({cid:str});
    let s=await Product.find({state:products[0].state});
    return res.status(200).send(products);
    }
    if (t=="3"){
     let products = await Product.find({cid:str});

     let s=await Product.find({country:products[0].country});
     console.log(s);
    return res.status(200).send(s); 
    }
    if (t=="4"){
      console.log("lk");
    let products = await Product.find({cid:str});
    let s=await Product.find({year:products[0].year});
    return res.status(200).send(products);
    }
    if (t=="5"){
     let products = await Product.find({cid:str});

     let s=await Product.find({courses:products[0].courses});
     console.log(s);
    return res.status(200).send(s); 
    }
  });
}
  /*app.post('/api/product', async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  });

  /*app.put('/api/product/:id', async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      product
    })

  });

  app.delete('/api/product/:id', async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })

  })

}*/
