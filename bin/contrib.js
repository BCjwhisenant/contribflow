#!/usr/bin/env node
var contribflow = require('../lib/contribflow.js')();
var type = process.argv[2];
var command = process.argv[3];
var value1 = process.argv[4];
var value2 = process.argv[4];

contribflow[type][command](value1, value2);