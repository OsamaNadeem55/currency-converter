#!/usr/bin/env node
import inquirer from 'inquirer';
const currency = {
    USD: 1,
    EURO: 0.91,
    JYP: 113,
    PKR: 280,
    AUD: 1.65,
    CAD: 1.3 // Canadian Dollar
    // Add more Currencies and thier exchange rates here
};
// propt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Select the Currency to Convert From:",
        type: 'list',
        choices: ['USD', 'EURO', 'JYP', 'PKR', 'AUD', 'CAD']
    },
    {
        name: 'to',
        message: "Select the Currency to Convert into:",
        type: 'list',
        choices: ['USD', 'EURO', 'JYP', 'PKR', 'AUD', 'CAD']
    },
    {
        name: "amount",
        message: "Enter the Amount to Convert:",
        type: "input"
    }
]);
let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
// formula of conversion
let baseAmount = amount / fromAmount; // USD base currency // 4
let convertedAmount = baseAmount * toAmount;
// Display the converted amount
console.log(`converted Amount = ${convertedAmount.toFixed(2)}`);
