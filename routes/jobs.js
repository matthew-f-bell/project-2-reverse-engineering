const router = require("express").Router();
const ctrl = require("../controllers");




// routes
                // For testing. Delete after use
                router.get("/show", ctrl.jobs.showJobs);

router.get("/", ctrl.jobs.index);
router.get("/new", ctrl.jobs.newJob);
router.get("/:id", ctrl.jobs.show);
router.post("/", ctrl.jobs.create);
router.get("/:id/edit", ctrl.jobs.edit);
router.put("/:id", ctrl.jobs.update);
router.delete("/:id", ctrl.jobs.destroy);



module.exports = router;