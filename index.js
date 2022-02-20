// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title', 
            message: 'What is your project title? (Required)', 
            validate: nameInput => {
                if (nameInput)  {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project: ',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Provide installation instructions: ',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide usage guidelines: ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the license your project will use.',
            choices: [
                'MIT',
                'Apache-2.0',
                'ISC',
                'BSD-2-Clause',
                'GPL-3.0-or-later',
                'UNLICENSE',
            ], 
            default: 'MIT',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide instructions for contributing: ',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide instructions for running tests: ',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput)  {
                    return true;
                } else  {
                    console.log('Please enter your GitHub Username!');
                    return false;
                }
            },
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
                if (linkInput)  {
                    return true;
                } else  {
                    console.log('Please enter your project GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address as a contact for additional questions. '
        },
       
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
           if (err) {
              console.log('Error. File was not created!');
              reject(err);
              return;
            }
            resolve({
              ok: true,
              message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
