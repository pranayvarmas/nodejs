let msg = new Product({
  name:"P",
  description:"D"})
msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })