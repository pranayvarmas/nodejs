const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    cid: String,
    name: String,
    year: String,
    city: String,
    state: String,
    country: String,
    students: String,
    courses: Array
});
mongoose.model('products', productSchema);
/*collegeid: String,
    name: String,
    year: String,
    city: String,
    state: String,
    country: String,
    students: String,
    courses: Array*/
