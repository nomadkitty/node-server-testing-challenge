const Projects = require("./project-model.js");

const db = require("../data/db-config.js");

it("should set testing environment", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("project model", () => {
  beforeEach(async () => {
    await db("projects").truncate();
  });

  describe("insert()", () => {
    it("should insert project into the db", async () => {
      await Projects.insert({ name: "new project" });
      await Projects.insert({ name: "Paint house" });

      const projects = await db("projects");
      expect(projects).toHaveLength(2);
    });

    it("should insert the provide project into the db", async () => {
      let project = await Projects.insert({ name: "new project" });
      expect(project.name).toBe("new project");

      project = await Projects.insert({ name: "Paint house" });
      expect(project.name).toBe("Paint house");
    });
  });

  describe("remove()", () => {
    it("should delete a project from the db", async () => {
      const { id } = await Projects.insert({ name: "new project" });

      let projects = await db("projects");

      expect(projects).toHaveLength(1);

      await Projects.remove(id);

      projects = await db("projects");
      expect(projects).toHaveLength(0);
    });
  });
});
