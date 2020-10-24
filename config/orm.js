// const connection = require("./connection");
const connection = require("../config/connection.js")
var orm = {
    selectAll: function (tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (table, cols, vals) {
        var queryString = "INSERT INTO ? FROM ?? VALUES ??";

        connection.query(queryString, [table, cols, vals], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (table, objColVals, condition) {
        var queryString =
            "UPDATE ? SET ? WHERE ?";

        connection.query(
            queryString,
            [table, objColVals, condition],
            function (err, result) {
                if (err) throw err;
                console.log(result);
            }
        );
    }
};

module.exports = orm;
