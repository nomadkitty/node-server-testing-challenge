const db = require("../data/db-config.js");
const boolToString = require("../middleware/boolToString.js");

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
};

function findAll() {
  return db("projects").then(projects => {
    boolToString(projects);
    return projects;
  });
}

function findById(id) {
  return db("projects")
    .where({ id })
    .then(project => {
      boolToString(project);
      return project[0];
    });
}

function insert(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(changes, id) {
  return db("projects")
    .update(changes)
    .where("id", id)
    .then(() => {
      return findById(id);
    });
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}
