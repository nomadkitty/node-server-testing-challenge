exports.seed = function(knex) {
  return knex("projects").insert([
    { name: "save the world", description: "a lot to do", is_complete: false },
    {
      name: "create an app",
      description: "a full stack react app",
      is_complete: false,
    },
    { name: "go to Mars", description: "", is_complete: false },
    { name: "revert climate change", description: "", is_complete: false },
  ]);
};
