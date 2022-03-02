const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const htmlTemplate = require("./lib/src/htmlTemplate")
const fs = require('fs')
const employees = [];

function startWithMgr () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Manager name?',
            name: `mgrName`
        },
        {
            type: 'input',
            message: 'What is the Manager ID?',
            name: `mgrId`
        },
        {
            type: 'input',
            message: 'What is the Manager Email?',
            name: `mgrEmail`
        },
        {
            type: 'input',
            message: 'What is the Manager office Number?',
            name: `mgrOffice`
        }
    ]).then(response => {
        const newMgr = new Manager(response.mgrName, response.mgrId, response.mgrEmail, response.mgrOffice);
        console.log(newMgr.getRole())
        employees.push(newMgr)
        mainMenu()
    })
}

function mainMenu () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add more?',
            name: `choice`,
            choices: ["Engineer", "Intern", "I am done"]
        }
    ]).then(response => {
        if(response.choice == "Engineer") {
            engineerQuestions()
        }else if (response.choice == "Intern") {
            internQuestions()
        }else {
            createHTML()
        }
    })
}

function engineerQuestions () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineer name?',
            name: `engName`
        },
        {
            type: 'input',
            message: 'What is the Engineer ID?',
            name: `engId`
        },
        {
            type: 'input',
            message: 'What is the Engineer Email?',
            name: `engEmail`
        },
        {
            type: 'input',
            message: 'What is the Engineer Github?',
            name: `engGithub`
        }
    ]).then(response => {
        const newEngineer = new Engineer(response.engName, response.engId, response.engEmail, response.engOffice, response.engGithub);
        console.log(newEngineer.getRole())
        employees.push(newEngineer)
        mainMenu()
    })
}

function internQuestions () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Interns name?',
            name: `intName`
        },
        {
            type: 'input',
            message: 'What is the Interns ID?',
            name: `intId`
        },
        {
            type: 'input',
            message: 'What is the Interns Email?',
            name: `intEmail`
        },
        {
            type: 'input',
            message: 'Where did the intern go to school?',
            name: `intSchool`
        }
    ]).then(response => {
        const newIntern = new Intern(response.intName, response.intId, response.intEmail, response.intSchool);
        console.log(newIntern.getRole())
        employees.push(newIntern)
        mainMenu()
    })
}

function writeToFile(templateStr) {
    fs.writeFile('./teamProfile.html', templateStr, (err) => {
    if (err) {
        console.log(err);
        return;
    } console.log('html created!')
})};

function createHTML () {
const templateStr = htmlTemplate(employees);
console.log(employees)
console.log(templateStr)
writeToFile(templateStr)
}

module.exports = employees;


startWithMgr()
