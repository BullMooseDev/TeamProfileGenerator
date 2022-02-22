const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const genHtml = require("./lib/src/htmlTemplate")
const employees = [];

function startWithMgr () {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Manager name?',
            name: `mgrName`
        }
    ]).then(response => {
        const newMgr = new Manager("Jake", "123", "test", "432")
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
        // const newMgr = new Manager()
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
        }
    ]).then(response => {
        // const newMgr = new Manager()
        employees.push(response)
        mainMenu()
    })
}

function createHTML () {
    console.log(employees)
    const templateStr = genHtml(employees)
    console.log(templateStr)
}

startWithMgr()