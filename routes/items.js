const router = require("express").Router();
const ctrl = require("../controllers");

// routes

router.get("/", ctrl.items.index);
router.get("/new", ctrl.items.newItem);
router.get("/:id", ctrl.items.show);
router.post("/", ctrl.items.create);
router.get("/:id/edit", ctrl.items.edit);
router.put("/:id", ctrl.items.update);
router.delete("/:id", ctrl.items.destroy);

module.exports = router;