const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
 const generateMarkDown = require('./generateMarkDown');


// const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "Title",
            message: "What is the Title of the application"
        },
        {
            type: "input",
            name: "Description",
            message: "Tell us about the application"
        },
        {
            type: "input",
            name: "table of contents",
            message: "Table of contents?"
        },
        {
            type: "input",
            name: "Installation",
            message: "What are the steps required to install the project"
        },
        {
            type: "input",
            name: "Usage",
            message: "Provide instructions for the app"
        },
        {
            type: "input",
            name: "Contributions",
            message: "Who are the contribitors?"
        },
        {
            type: "input",
            name: "Test",
            message: "What is the command to run test?"
        },
        {
            type: "list",
            name: "license",
            message: "What license did you choose?",
            choices: [
                { name: 'Apache 2.0', value: "Apache%202.0" }, { name: 'MIT License', value: "MIT" }, { name: 'Mozilla Public License', value: "MPL" }],

        },
        {
            type: "input",
            name: "Github",
            message: "Enter Github..."
        },
        {
            type: "input",
            name: "Linkedin",
            message: "Enter Linkedin..."
        },
        {
            type: "input",
            name: "Email",
            message: "What is your Email?"
        },
    ])

};

const init = () => {
    promptUser()
        .then((data) =>
            fs.writeFile('README.md', generateMarkDown(data), (err) =>
                err ? console.error(err) : console.log('Readme file was successfully created!!')));
};



init();