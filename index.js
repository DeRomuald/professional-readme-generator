// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
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
            message: 'Please write a brief description of your project'
        },
        {
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'Select your Table of Contents( Check all that apply)',
            choices: [ 'Installation', 
                         'Usage',
                         'License', 
                         'Contributing',
                         'Tests',
                         'Questions']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please describe the installation process (if any)'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please describe the usage of your project. What is your User story?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select license',
            choices: ['Apache_License_2.0',
            'GNU_General_Public_License_v3.0',
            'MIT_License',
            'Boost_Software_License_1.0',
            'Creative_Commons_Zero_v1.0_Universal',
            'Eclipse_Public_License_2.0',
            'GNU_Affero_General_Public_License_v3.0',
            'GNU_General_Public_License_v2.0',
            'GNU_Lesser_General_Public_License_v2.1',
            'Mozilla_Public_License_2.0',
            'The_Unlicense']
            
        },
        {
            type: "input",
            name: "contributors",
            message: "Who are the contributors of this project?"
        },
        {
            type: "input",
            name: "tests",
            message: "Are there any tests included?(please specify)"
        },
        {
            type: "input",
            name: "acknowledgments",
            message: "Are there any aknowlegedments or inspirations for your project?"
        },
        {
            type: "input",
            name: "questions",
            message: "What is your email address?"
        },
        {
            type: "input",
            name: "userName",
            message: "Please enter your GitHub username"
        },
       
    ]);
};
 
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise ((resolve, reject) => {
        fs.writeFile(fileName,data,err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok:true,
                message: 'Readme File Created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser().then (response => {
    writeToFile('./dist/README.md', generateMarkdown(response));
    });
};

// Function call to initialize app
init();
