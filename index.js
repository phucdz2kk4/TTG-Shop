const express = require('express');

require('dotenv').config(); // dau' file

const database = require("./config/database"); // link database

const systemConfig = require("./config/system"); //

// link route
const routeAdmin = require("./routes/admin/index.route"); 
const route = require("./routes/client/index.route"); 

database.connect(); // goi database
const app = express();
const port = process.env.PORT // used to hidden port


// Thiết lập view engine là Pug
app.set('view engine', 'pug');

// Thiết lập thư mục chứa các file view
app.set('views', './views');


// app locals variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

app.use(express.static("public")); // auto di vao public

// goi route
route(app);
routeAdmin(app);

app.listen(port,() => {
    console.log(`app listening on port ${port}`);
})