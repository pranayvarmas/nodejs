// /client/src/App.js

import React, { useState, useEffect } from "react";

// SERVICES
import productService from './services/productService';
//var str;
function App() {
  //global.myvar=global.myvar;
  //var str=global.myvar;
  //alert(str);
  const [products, setproducts] = useState(null);
  //const [products1, setproducts1] =useState(null);
  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    //console.log("pppp");
    let res = await productService.getAll();//findOne({name:localStorage.getItem("name")});
    
    setproducts(res);
  }

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <table>
        <tr>
        <th>College ID</th>
        <th>Name</th>
        <th>Year Founded</th>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
        <th>Students</th>
        <th>Courses</th>
        </tr>
        <tr>
        <th>{product.cid}</th>
        <th>{product.name}</th>
        <th>{product.year}</th>
        <th>{product.city}</th>
        <th>{product.state}</th>
        <th>{product.country}</th>
        <th>{product.students}</th>
        <th>{product.courses}</th>
        
        </tr>
        </table>
      </li>
    );
  };

  return (
    <div className="App">
      <ul className="list">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>
    </div>
  );
}

export default App;