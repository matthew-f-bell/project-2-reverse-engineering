const db = require("../models");


const index = (req, res) => {
    db.Job.find({},(err, allJobs) => {
        if (err) return res.send(err);
        const context = { jobs: allJobs, user: req.user };
        return res.render("jobs/index", context);
    });
};


// newJob

const newJob = (req, res) => {
	const context = { user: req.user };
	return res.render("jobs/new", context);
};


// show

const show = (req, res) => {
	console.log(req.params.id);
	db.Job.findById(req.params.id)
		// .populate("jobs")
		.exec((err, foundJob)=> {
			if(err) return res.send(err);
			const context = {job: foundJob};
		    return res.render("jobs/show", context)
	});
};


// create
const create = (req, res) => {
	db.Job.create(req.body, (err, createdJob) => {
		if (err) return res.send(err);

		return res.redirect("/users");
	});
};



// Edit

const edit = (req, res) => {
	db.Job.findById(req.body._id, (err, foundJob) => {
		if (err) return res.send(err);
		const context = { job: foundJob };
	    res.render("jobs/edit", context);
	});
};

// Update

const update = (req, res) => {
	db.Job.findByIdAndUpdate(req.params.id,
		{
			$set: {...req.body,},
		},
		{ new: true },
		(err, updatedJob) => {
			if (err) return res.send(err);
			res.redirect(`/users`);

			// res.redirect(`/jobs/${updatedJob._id}`);
		}
	);
};

// delete

const destroy = (req, res) => {
	db.Job.findByIdAndDelete(req.params.id, (err, deletedJob) => {
		if (err) return res.send(err);
		// db.Job.findById(deletedJob, (err, foundJob) => {
            // foundJob.remove(deletedJob);
            // foundJob.save();
            res.redirect("/users")
        // })
	});
};



module.exports = {
    index,
    newJob,
	show,
    create,
    edit,
    update,
    destroy,
	

}