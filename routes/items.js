const router = require("express").Router();
const ctrl = require("../controllers");

// routes
router.get("/", ctrl.items.index);
router.post("/", ctrl.items.create);
router.get("/:id", ctrl.items.show);



module.exports = router;