// Packages needed for this application:
const inquirer = require('inquirer');
const fs = require('fs');
const generateTemplate = require('./utils/generateMarkdown.js');

//Array of questions for user input:
inquirer
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
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'gitHub'
        }
    ])

    // User input creates file:
    .then(function (data) {
        let fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
        // File name generated from user input of project title

        const template = generateTemplate(data);
        // Pull the template from the generatedMarkdown file

        fs.writeFile(fileName, (template), (err) =>
            err ? console.log(err) : console.log('README successfully created!'));
        // Writes file using .prompt answers to fill the template
    });
