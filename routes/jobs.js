const router = require("express").Router();
const ctrl = require("../controllers");


// routes

router.get("/", ctrl.jobs.index);



module.exports = router;