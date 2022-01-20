const router = require("express").Router();
const ctrl = require("../controllers");


// routes

router.get("/", ctrl.jobs.index);
router.get("/new", ctrl.jobs.newJob);
router.post("/", ctrl.jobs.create);
router.get("/:id", ctrl.jobs.show);
router.get("/:id/edit", ctrl.jobs.edit);
router.put("/:id", ctrl.jobs.update);
router.delete("/:id", ctrl.jobs.destroy);



module.exports = router;