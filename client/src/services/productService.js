//  /client/src/services/productService.js

import axios from 'axios';
export default{
  getAll: async () => {
  	//alert(global.myvar);
  	//console.log(myvar);
    let res = await axios.get(`/api/product/`+global.myvar+'/'+0, {params:{str:global.myvar, t:"0"}});
    return res.data || [];
  },
  getcity: async () => {
  	//alert(global.myvar);
  	//console.log(myvar);
    let res = await axios.get(`/api/product/`+global.myvar+'/'+1, {params:{str:global.myvar, t:"1"}});
    return res.data || [];
  },
  getstate: async () => {
  	//alert(global.myvar);
  	//console.log(myvar);
    let res = await axios.get(`/api/product/`+global.myvar+'/'+1, {params:{str:global.myvar, t:"2"}});
    return res.data || [];
  },
  getcountry: async () => {
  	//alert(global.myvar);
  	//console.log(myvar);
    let res = await axios.get(`/api/product/`+global.myvar+'/'+1, {params:{str:global.myvar, t:"3"}});
    return res.data || [];
  },
  getyear: async () => {
  	//alert(global.myvar);
  	//console.log(myvar);
    let res = await axios.get(`/api/product/`+global.myvar+'/'+1, {params:{str:global.myvar, t:"4"}});
    return res.data || [];
  },
  getcourses: async () => {
  	//alert(global.myvar);
  	//console.log(myvar);
    let res = await axios.get(`/api/product/`+global.myvar+'/'+1, {params:{str:global.myvar, t:"5"}});
    return res.data || [];
  }
}
