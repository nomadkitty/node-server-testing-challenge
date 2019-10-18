const request = require("supertest");

const db = require("../data/db-config.js");
const Projects = require("./project-model.js");

const server = require("../server.js");

describe("project-router.js", () => {
  beforeEach(async () => {
    await db("projects").truncate();
  });

  describe("GET /api/projects", () => {
    it("responds with 200 OK", async () => {
      const res = await request(server).get("/api/projects");
      expect(res.status).toBe(200);
    });
  });
});
