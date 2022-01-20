require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules ==== */
const app = express();

/* ==== Configuration ==== */
const PORT = 4000;
app.set("view engine", "ejs");

/* ==== Middleware ==== */
// body data middleware
app.use(express.urlencoded({ extended: true}));
// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));
// logger
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});

/* ==== Routes && Controllers ==== */
// home route
app.get("/", (req, res) => {
    res.render("home");
});

// internal route
app.use("/items", routes.items);
app.use("/jobs", routes.jobs);


// 404 route
app.get((req, res) => {
    res.send("404! Error! Page not found >:(")
})

/* ==== Server bind ==== */
app.listen(PORT, () => {
    console.log(`I am a little working server on http://localhost:${PORT}`);
});

/* ==== Database Connection ==== */
// require
const mongoose = require("mongoose");
// shortcut to mongoose.connection object, created by mongoose.connect
const db = mongoose.connection;
const dbUrl = process.env.DATABASE_URL;

mongoose
	.connect(dbUrl)
	.then(() =>
		console.log(
			`MongoDB successfully connected at ${db.host}:${db.port}! How dope!`
		)
	)
	.catch((err) => console.log(`MongoDB connection FAILED :( Error: ${err}`));