const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const questionsForProfileGen = () => {
    console.log('We are now creating a professional profile for your team!');

    return inquirer
        .prompt([{
            type: 'input',
            message: "please enter the employee name. (Required)",
            name: 'name',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('you need to type a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "please enter the employees email. (Required)",
            name: 'role',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('you need to type a email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "please input the employees github. (Required)",
            name: 'github',
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('you need to type a github');
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: "please choose the employees role. (Required)",
            name: 'role',
            default: 'index',
            choices: ['engineer', 'manager', 'intern'],
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log('you need to choose a role');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "please enter the employees id. (Required)",
            name: 'id',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('you need to type a id');
                    return false;
                }
            }
        }
        /* make it ask if theres more employees and if yes then run the inquirer again?
        for every full employee profile data use bootstrap to create a card of their data */
    ])
};

questionsForProfileGen();