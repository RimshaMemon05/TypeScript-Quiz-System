#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bold.magenta("\n \tWelcome To Rimsha Coding - Quiz-System\n"));
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1. What is the correct way to check if two values are not equal in TypeScript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2. Which of the following characters is commonly allowed in variables names in TypeScript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3. Which operator is commonly used for string concatenation in TypeScript?",
        choices: ["+", "-", "*", "/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4. In TypeScript, which symbol is commonly used to terminate a statement?",
        choices: [".", ",", ";", ":"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5. Which method of inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()", "prompt()", "init()", "run()"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "a !== b":
        console.log(chalk.bold.yellow("1. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("1. Incorrect!"));
}
switch (quiz.question_2) {
    case "$":
        console.log(chalk.bold.yellow("2. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("2. Incorrect!"));
}
switch (quiz.question_3) {
    case "+":
        console.log(chalk.bold.yellow("3. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("3. Incorrect!"));
}
switch (quiz.question_4) {
    case ";":
        console.log(chalk.bold.yellow("4. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("4. Incorrect!"));
}
switch (quiz.question_5) {
    case "prompt()":
        console.log(chalk.bold.yellow("5. Correct!"));
        ++score;
        break;
    default:
        console.log(chalk.bold.red("5. Incorrect!"));
}
console.log(chalk.bold.blueBright(`\n \tYour Total Score is: ${score}\n`));
