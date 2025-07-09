const lodash = require('lodash');

const names = ["john", "doe", "jane", "smith"];

const changedName = lodash.map(names, lodash.upperCase)

console.log(changedName); // Output: ["JOHN", "DOE", "JANE", "SMITH"]

