// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your github username',
        name: 'github',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Response Needed")
            }
            return true
        }
    },
    {
        type: 'input',
        message: 'What is your email',
        name: 'email',
        validate: function(answer) {
            if (answer.length < 1) {
                return console.log("Response Needed")
            }
            return true
        }
    },
    {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: function(answer) {
        if (answer.length < 1) {
            return console.log("Response needed")
        }
        return true
    }
    },
    {
    type: 'input',
    message: 'Describe your project',
    name: 'description',
    },
    {
    type: 'input',
    message: 'How is your project installed',
    name: 'installation',
    },
    {
    type: 'input',
    message: 'How is your project used',
    name: 'Usage',
    },
    {
    type: 'input',
    message: 'Contribution',
    name: 'contributions',
    },
    {
    type: 'input',
    message: 'Tests',
    name: 'tests',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', ''],
        name: 'license'
    }
,];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) throw err;
      console.log('README.md file has been created!');
    });
  }
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    });
  }
// Function call to initialize app
init();
