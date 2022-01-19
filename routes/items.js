const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/", ctrl.items.index);
router.post("/", ctrl.items.create);




module.exports = router;