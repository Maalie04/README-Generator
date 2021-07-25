const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => { 
return inquirer.prompt([
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
    name: "Licence",
    message: "What license did you choose?",
    choices: ['Apache','MIT License', 'Mozilla Public Liscense' ],
    validate: (value) => {if(value){return true}else{return 'Please choose a license!!'}}
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
};

const writeToFile = (filename, data) => {
    
};

const init = () => {
    promptUser()
    .then(())
};



