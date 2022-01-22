require("dotenv").config();
/* ==== External Modules ==== */
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const expressLayouts = require ("express-ejs-layouts");
const session = require("express-session");
const passport = require("passport");

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules ==== */
const bodyParser = require("body-parser");
const app = express();

/* ==== Configuration ==== */
const PORT = 4000;
// app.use(expressLayouts);
app.set("view engine", "ejs");

/* ==== Middleware ==== */
// body data middleware
app.use(express.urlencoded({ extended: true}));



// method override middleware
app.use(methodOverride("_method"));
// serve public files
app.use(express.static("public"));
// app.use("/css", express.static(_dirname + "public/css"));
app.use(express.json());
// logger
app.use((req, res, next) => {
    console.log(req.url, req.method);
    next();
});
// session middleware
app.use(
	session({
		secret: "TeriList",
		resave: false,
		saveUninitialized: true,
	})	
);
// mount passport
app.use(passport.initialize());
app.use(passport.session());

/* ==== Routes && Controllers ==== */
// home route
app.get("/", (req, res) => {
    res.render("home", {user: req.user} )
});



// 404 route
app.get((req, res) => {
    res.send("404! Error! Page not found >:(")
})

/* ==== Internal Routes ==== */
app.use("/", routes.googleOAuth);
app.use("/items", routes.items);
app.use("/jobs", routes.jobs);
app.use("/users", routes.users);

/* ==== Server bind ==== */
app.listen(PORT, () => {
    console.log(`I am a little working server on http://localhost:${PORT}`);
});

/* ==== Database Connection ==== */

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

// passport config
require("./config/passport");