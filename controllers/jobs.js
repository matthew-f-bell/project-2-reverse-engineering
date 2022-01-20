const db = require("../models");


const index = (req, res) => {
    db.Job.find({},(err, allJobs) => {
        if (err) return res.send(err);
        const context = { jobs: allJobs };
        return res.render("jobs/index", context);
    });
};

// create
const create = (req, res) => {
	db.Job.create(req.body, (err, createdJob) => {
		if (err) return res.send(err);

		return res.redirect("/jobs");
	});
};


// newJob

const newJob = (req, res) => {
	res.render("jobs/new");
};






module.exports = {
    index,
    create,
    newJob,
    
    
}