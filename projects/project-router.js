const router = require("express").Router();

const Projects = require("./project-model.js");

router.get("/", (req, res) => {
  Projects.findAll()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

router.get("/:id", (req, res) => {
  Projects.findById(req.params.id)
    .then(project => {
      if (project) {
        res.status(200).json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

router.post("/", (req, res) => {
  Projects.insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Projects.findById(id)
    .then(project => {
      if (project) {
        Projects.update(changes, id).then(updatedProject => {
          res.status(200).json(updatedProject);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update project" });
    });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ message: "Project deleted" });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;
