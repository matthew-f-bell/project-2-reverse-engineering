const router = require("express").Router();
const ctrl = require("../controllers");


// routes

router.get("/", ctrl.jobs.index);
router.get("/new", ctrl.jobs.newJob);
router.post("/", ctrl.jobs.create);



module.exports = router;