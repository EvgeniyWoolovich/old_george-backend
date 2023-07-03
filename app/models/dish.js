const sql = require("./db.js");

const Dish = function (dish) {
  this.id = dish.id;
  this.categories = dish.categories;
  this.name = dish.name;
  this.description = dish.description;
  this.price = dish.price;
  this.url = dish.url;
  this.all = dish.all;
};

Dish.findById = (id, result) => {
  sql.query(`SELECT * FROM dish WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

Dish.getAll = (title, result) => {
  let query = "SELECT * FROM dish";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("tutorials: ", res);
    result(null, res);
  });
};

module.exports = Dish;