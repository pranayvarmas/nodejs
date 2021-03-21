// /client/src/App.js

import React, { useState, useEffect } from "react";

// SERVICES
import productService from './services/productService';
//var str;
function SimilarCity() {
  //global.myvar=global.myvar;
  //var str=global.myvar;
  //alert(str);
  const [products, setproducts] = useState(null);

  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    //console.log("pppp");
    let res = await productService.getcity();//findOne({name:localStorage.getItem("name")});
    
    setproducts(res);
  }
  var mytable="";
  //for (var cell of products) {mytable += "<tr><td>" + cell.cid+ "</td>"+"<td>"+cell.name+"</td>"+"<td>"+cell.year+"</td>"+"<td>"+cell.city+"</td>"+"<td>"+cell.state+"</td>"+"<td>"+cell.country+"</td>"+"<td>"+cell.students+"</td>"+"<td>"+cell.courses+"</td></tr>";}
  
  const renderProduct = product => {
    console.log("t");
    console.log(product);
    console.log("t");
    return (
      <li key={product._id} className="list__item product">
      <item>City Similarity</item>
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
        </table>
        <p>{product.cid}</p>
      </li>
    );
  };

  return (
    <div className="SimilarCity">
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

export default SimilarCity;