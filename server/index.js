require("dotenv").config();
const express = require("express");
const session = require("express-session");
const { json } = require("body-parser");
const cors = require("cors");
const checkForSession = require("./middlewares/checkForSession");
const swag_ct = require("./controllers/swag_controller");
const auth_ct = require("./controllers/auth_controller");
const cart_ct = require("./controllers/cart_controller");
const search_ct = require("./controllers/search_controller");

const app = express();

app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
app.use(checkForSession);

app.get("/api/swag", swag_ct.read);
app.post('/api/login', auth_ct.login);
app.post('/api/register', auth_ct.register);
app.post('/api/signout', auth_ct.signout);
app.get('/api/user', auth_ct.getUser);
app.post('/api/cart', cart_ct.add);
app.post('/api/cart/checkout', cart_ct.checkout);
app.delete('/api/cart', cart_ct.delete);
app.get('/api/search', search_ct.search);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`I'm listening on port ${port}!`));
