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
	db.User.find({}, (err, foundJobs) => {
		if (err) return res.send(err);
		const context = { jobs: foundJobs, user: req.user };
		return res.render("jobs/new", context);
	})
};


// show

const show = (req, res) => {
	db.Job.findById(req.params.id)
		.populate("user")
		.exec((err, foundJob)=> {
			if(err) return res.send(err);
			const context = {jobs: foundJob, user: req.user};
		    return res.render("jobs/show", context)
	});
};


// create
const create = (req, res) => {
	db.Job.create(req.body, (err, createdJob) => {
		if (err) return res.send(err);
		db.User.findById(createdJob.user_id)
			.exec(function(err, foundUser) {
				if(err) return res.send(err);
				foundUser.jobs.push(createdJob)
				foundUser.save();
				res.redirect("/jobs");
			})
		})
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
			res.redirect(`/jobs`);

			// res.redirect(`/jobs/${updatedJob._id}`);
		}
	);
};

// delete

const destroy = (req, res) => {
	db.Job.findByIdAndDelete(req.params.id, (err, deletedJob) => {
		if (err) return res.send(err);
		db.User.findById(deletedJob.user, (err, foundUser) => {
            foundUser.jobs.remove(deletedJob);
            foundUser.save();
            res.redirect("/jobs")
        })
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