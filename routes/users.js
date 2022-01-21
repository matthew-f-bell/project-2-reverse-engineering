const router = require("express").Router();
const ctrl = require("../controllers");

// routes

router.get("/", ctrl.users.index);

module.exports = router;