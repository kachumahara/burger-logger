// Import MySQL connection.
var connection = require("../config/connection.js");



function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

//`selectAll()`
//* `insertOne()`
//* `updateOne()`

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, callback) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
// function that creates new objects
  create: function(table, cols, vals, cb) {
    let queryString = ` INSERT INTO ${table} (${cols}) VALUES (${printQuestionMarks(
      vals.length
    )}) `;
    console.log(queryString);
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
// function that updates
  update: function(table, cols, vals, condition, cb) {
    console.log(table, cols, condition);
    let queryString = ` UPDATE ${table} SET ${cols} = ${vals} WHERE (${condition}) `;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
// function that deletes
  delete: function(table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition}`;
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
