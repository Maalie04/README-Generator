const inquirer = require('inquirer');
const fs = require('fs');
const utiil = require('util')

inquirer.prompt([
    {
    type: "input",
    name: "Description",
    message: "Tell us about the application"
},
{
    type: "input",
    name: "table of contents",
    list: ""
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
    type: "input",
    name: "Questions",
    message: ""
},
{
    type: "list",
    name: "Liscence",
    message: "Choose...",
    choices: ['him','me'],
},
{
    type: "input",
    name: "Github",
    message: "Enter Github..."
},
{
    type: "input",
    name: "Email",
    message: "What is your Email?"
},

]) .then(function(answers){
    console.log(answers.Welcome)
})