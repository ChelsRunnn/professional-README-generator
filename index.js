// TODO: Include packages needed for this application
// const generateMarkdown = ('./utils/generateMarkdown.js');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
inquirer
    .prompt(questions)

// use this outline for the following Qs
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a short description of the project, include your motivation and/or the problem your app solves.',
        name: 'description',
    },
    {
        type: 'confirm',
        message: 'Would you like to include a Table of Contents?',
        name: 'toC',
    },
    {
        type: 'input',
        message: 'What are the steps for installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What instructions for use would you like to include?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List anyone you would like to thank or acknowledge for their aid in your development process.',
        name: 'credit',
    },
    {
        type: 'checkbox',
        message: 'What kind of license does this project have?',
        choices: 'MIT', //TODO: add additional choices
        name: 'license'
    },
    {
        type: 'input',
        message: 'List any features to highlight:',
        name: 'features'
    },
    {
        type: 'input',
        message: 'What is your email',
        name: 'howToContribute'
    }
];

// TODO: Create a function to write README file
const fs = require('fs');
function writeToFile(fileName, data) { }
fs.writeFile(`${data.title}`, data)
// pull the file name from user input of project title

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
