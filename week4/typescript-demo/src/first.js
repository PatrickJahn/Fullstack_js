"use strict";
exports.__esModule = true;
var node_fetch_1 = require("node-fetch");
var http = require("http");
node_fetch_1["default"]("www.google.com")
    .then(function (d) { return console.log(d); });
