if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("./db/connection");

const moviesRouter = require("./movies/movies.router");
const reviewsRouter = require("./reviews/reviews.router");
const theatersRouter = require("./theaters/theaters.router");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

app.use(express.json());
app.use(cors());
app.set("db", knex);
app.use("/movies", moviesRouter);
app.use("/reviews", reviewsRouter);
app.use("/theaters", theatersRouter);

// Not found handler
app.use(notFound);

// Error handler
app.use(errorHandler);

module.exports = app;
