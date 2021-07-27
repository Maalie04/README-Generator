const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkDown = require('./generateMarkDown');


const writeFileAsync = util.promisify(fs.writeFile);

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
            message: "Do you have any test?"
        },
        {
            type: "list",
            name: "Licence",
            message: "What license did you choose?",
            choices: ['Apache-2.0', 'MIT License', 'Mozilla Public Liscense'],
            validate: (value) => { if (value) { return true } else { return 'Please choose a license!!' } }
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
     ])//.then((data) => {

    //     writeToFile = (filename, data) => {

    //         `${data.Title.toLowerCase().split(' ').join('')}.json`;

    //         fs.writeFile("./assets" + filename, data, function (err) {
    //             if (err) {
    //                 console.log(err)
    //             }
    //         })
    //     };

    // })

};

const init = () => {
    promptUser()
        .then((data) =>
            fs.writeFile('myReadMe.md', generateMarkDown(data), (err) =>
                err ? console.error(err) : console.log('Readme file was successfully created!!')));
};



init();