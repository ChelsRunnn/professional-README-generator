// TODO: Include packages needed for this application
// const generateMarkdown = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require('./utils/generateMarkdown.js');
// const template = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
inquirer
    // .prompt(questions)
    .prompt([
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
            type: 'input',
            message: 'What are the steps or commands for installation?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List anyone you would like to thank or acknowledge',
            name: 'credits',
        },
        {
            type: 'checkbox',
            message: 'What kind of license does this project have?',
            choices: ['MIT', 'Apache License 2.0', 'ISC', 'None'],
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
    ])
    // DONE .prompt questions

    // .then(writeToFile())
    .then(function (data) {
        let fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
        // DONE created file name generated from user input of project name
console.log(data.license);
console.log(data.title);
        // console.log(generateTemplate);
        const template = generateTemplate(data);
        // this allows me to pull the template (its return value from the func!)

        fs.writeFile(fileName, (template), (err) =>
            err ? console.log(err) : console.log('README successfully created!'));
        // the above 2 lines work to create file using .prompt answers
    });


// const questions = [] ––– can move Qs into this array to clean up code down the line

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {} fileName, data throwing error that fileName was already declared

// function writeToFile() {
//     let fileName = `${data.title.toLowerCase().split(' ').join('')}.json`;
//     fs.writeFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('README successfully created!'));
// };
// pull the file name from user input of project title
// use the exported generateMarkdown function?
