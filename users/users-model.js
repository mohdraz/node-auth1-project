const db = require("../database/dbConfig");
module.exports = {
  getUsers,
  addUser,
  getUsersById,
  getUsersBy
};

function getUsers() {
  return db("users").select("id", "username");
}

function getUsersBy(username) {
  return db("users")
    .select("id", "username", "password")
    .where(username);
}

function addUser(newUser) {
  return db("users")
    .insert(newUser)
    .then(ids => {
      const [id] = ids;
      return getUsersById(id);
    });
}

function getUsersById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}
