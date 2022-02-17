// Integrate / hook up API Routes into the Server
const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require("./comment-routes");

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
