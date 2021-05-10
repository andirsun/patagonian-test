const express = require('express');
const healthRoute = require('./health.route');
const carRoute = require('./car.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/',
    route: healthRoute,
  },
  {
    path: '/cars',
    route: carRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
