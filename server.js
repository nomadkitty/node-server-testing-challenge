const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const ProjectRouter = require("./projects/project-router.js");

const logger = require("./middleware/logger.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(logger);

server.use("/api/projects", ProjectRouter);

server.get("/", (req, res) => {
  res.json({ message: "Server is working!" });
});

module.exports = server;
