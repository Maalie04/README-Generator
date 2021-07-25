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
            type: "list",
            name: "table of contents",
            message: ""
        },
        {
            type: "input",
            name: "Installation",
            message: ""
        },
        {
            type: "input",
            name: "Usage",
            message: ""
        },
        {
            type: "input",
            name: "Contributions",
            message: "Who are the contribitors?"
        },
        {
            type: "input",
            name: "Test",
            message: ""
        },
        {
            type: "list",
            name: "Licence",
            message: "What license did you choose?",
            choices: ['Apache', 'MIT License', 'Mozilla Public Liscense'],
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
    ]).then(function (answers) {

    })
};

const writeToFile = (filename, data) => {

    const filename = `${data.Title.toLowerCase().split(' ').join('')}.json`;
    fs.writeFile("./assets" + filename, data, function (err) {
        if (err) {
            console.log(err)
        }
    })
};

const init = () => {
    promptUser()
        .then((data) => 
            writeToFile('myReadMe.md', generateMarkDown(data), (err) => 
            err ? console.error(err) : console.log('Readme file was successfully created!!')));       
};



