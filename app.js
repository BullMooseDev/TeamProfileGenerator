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
            message: "please enter some sort of question dummy",
            name: 'some sort of name goes here',
            validate: nameOfInput => {
                if (nameOfInput) {
                    return true;
                } else {
                    console.log('you need to type shit');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "please enter some sort of question dummy",
            name: 'some sort of name goes here',
            validate: nameOfInput => {
                if (nameOfInput) {
                    return true;
                } else {
                    console.log('you need to type shit');
                    return false;
                }
            }
        }
    ])
};