const router = require("express").Router();
const ctrl = require("../controllers");

// routes

router.get("/", ctrl.items.index);
router.get("/new", ctrl.items.newItem);
router.delete("/:id", ctrl.items.destroy);
router.put("/:id", ctrl.items.update);
router.post("/", ctrl.items.create);
router.get("/:id/edit", ctrl.items.edit);
router.get("/:id", ctrl.items.show);

module.exports = router;