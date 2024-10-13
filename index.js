const express = require('express'); // used library
const methodOverride = require("method-override"); // used library de thay doi phuong thuc
const bodyParser = require('body-parser'); // used library de lay du lieu tu form
require('dotenv').config(); // dau' file
const database = require("./config/database"); // used library link database
const systemConfig = require("./config/system"); // used library link config

// link route
const routeAdmin = require("./routes/admin/index.route"); 
const route = require("./routes/client/index.route"); 

database.connect(); // goi database
const app = express();
const port = process.env.PORT // used to hidden port

app.use(methodOverride("_method")); // dung de thay doi phuong thuc

app.use(bodyParser.urlencoded({ extended: false })); // dung de lay du lieu tu form

// Thiết lập view engine là Pug
app.set('view engine', 'pug');

// Thiết lập thư mục chứa các file view
app.set('views', './views'); // auto vao file view


// app locals variables
app.locals.prefixAdmin = systemConfig.prefixAdmin; // dan vao prefixAdmin de su dung

app.use(express.static("public")); // auto di vao public

// goi route
route(app);
routeAdmin(app);

// create hosting port
app.listen(port,() => {
    console.log(`app listening on port ${port}`);
})