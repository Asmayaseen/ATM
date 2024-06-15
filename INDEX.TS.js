"use strict";
// #! /usr/bin/env node
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var c_value = {
    PKR: 278.40,
    UAE: 3.67,
    USD: 1
};
var ans = await inquirer_1.default.prompt([{
        type: "list",
        name: "from",
        message: "converting from",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "list",
        name: "to",
        message: "converting to",
        choices: ['PKR', 'UAE', 'USD']
    },
    {
        type: "number",
        name: "amount",
        message: "your amount to convert"
    }
]);
console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);
