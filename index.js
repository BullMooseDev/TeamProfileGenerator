const inquirer = require('inquirer');
const fs = require('fs');
/* const generateHtml = require('./lib/src/htmlTemplate'); */
/* const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager'); */

const determineEmployeeCount = () => {
    console.log('We are now creating a professional profile for your team!');

    return inquirer.prompt([
        {
            type: 'number',
            message: 'how many employees do you have in total? (Required)',
            name: 'employeeCount',
            validate: employeeCount => {
                if (employeeCount) {
                    return true;
                } else {
                    console.log('you need to type how many members are on the team.');
                    return false;
                }
            }
        }
    ]).then(function (numberResponse) {
        console.log(numberResponse)
        if (numberResponse.employeeCount < 2) {
            return employeeDescription();
        } else {
            numberResponse.employeeCount.forEach(employeeCount => {
                employeeDescription();
            })
        };
    });
};


/* use a for loop to ask the employeedescription multiple times based on number prompt
push each employee object into an array
use for each to turn each object in array into a card onto html 

also use foreach for each object in order to deconstruct and get individual data?*/

const employeeDescription = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "please enter the employee name. (Required)",
            name: 'employeeName',
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
            name: 'teamMemberEmail',
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
            name: 'githubUserName',
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
            type: 'input',
            message: "please enter the employees id. (Required)",
            name: 'idNumber',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('you need to type a id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: "please enter the employees office location. (Required)",
            name: 'officeLocation',
            validate: officeLocation => {
                if (officeLocation) {
                    return true;
                } else {
                    console.log('you need to type the office location');
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: "please choose the employees role. (Required)",
            name: 'role',
            default: 'index',
            choices: ['engineer', 'manager', 'intern']
        }
    ]).then(function (responses) {
        for (let i = 0; i < responses.role.length; i++) {
            if (responses.role == "intern") {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'attendedSchool',
                        message: 'what school did the intern attend?',
                        validate: schoolInput => {
                            if (schoolInput) {
                                return true;
                            } else {
                                console.log('you need to type a school');
                                return false;
                            }
                        }
                    }
                ]);
            } else {
                return;
            }
        };
    })
};

/* make it ask if theres more employees and if yes then run the inquirer again?
use a for loop at beginning asking how many employees need to be made?

function getAnswers() {
return inquirer.prompt(questions).then((answers) => {
    if (answers.is_finished) {
    return answers;
    } else {
    return getAnswers();
    }
});
}

for every full employee profile data use bootstrap to create a card of their data */

/* function writeToFile(readmeFile) {
    fs.writeFile("./index.html", readmeFile, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('Team profile created!')
    });
};

questionsForProfileGen().then(answers => {
    console.log(answers)
    const newProfileTemplate = generateHtml(answers)
    console.log(newProfileTemplate)
    writeToFile(newProfileTemplate)
}); */

determineEmployeeCount();