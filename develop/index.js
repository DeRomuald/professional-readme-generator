// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const develop = require ('./develop');
const generateMarkdown = require ('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const promptUser = ()=> {
    return inquirer.prompt ([
        {
          type: 'input',
          name: 'projectTitle',
          message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project'
        },
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'Select your Table of Contents( Check all that apply)',
            choices: ['Project Title', 'Description', 'Installation', 'Usage','License', 'Contributing','Tests','Questions']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the installation process (if any)'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of your project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the appropriate license for this project',
            choices: ['Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense']
            
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a Test included"
        },
        {
            type: "input",
            name: "acknowledgments",
            message: "Is anyone to be acknowledge?"
        },
        {
            type: "input",
            name: "questions",
            message: "What do I do if I have an issue?"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username"
        }

    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
