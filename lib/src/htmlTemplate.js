// const generateHtml = require('../utils/generateHtml');
// const mainIndex = require('../../index');
// const Employee = require('../employee');

// const employeeArr = [];

// employeeArr.forEach(() => {
// const cardContainer = document.getElementById('cardHome');

// cardContainer.innerHTML += employeeCards;
// });
function genMgrCards(arr) {
    mgrTemplate = ``
    arr.forEach(element => {
        if(element.getRole() == "Manager") {
            mgrTemplate +=`
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">${element.name} <br>${element.getRole()} <br>${element.officeNumber} <br>${element.id} </p>
              <a href="https://github.com/test" id="github" class="btn btn-primary">Go to github</a>
              <a href="mailto: ${element.email}" id="email" class="btn btn-primary">Send an email</a>
            </div>`
        }
    });
    return mgrTemplate
}
// const employeeCards = `
//     <div class="card-body">
//       <h5 class="card-title">Card title</h5>
//       <p class="card-text">${employeeName} <br>${role} <br>${officeLocation} <br>${idNumber} <br>${attendedSchool} </p>
//       <a href="https://github.com/${githubUserName}" id="github" class="btn btn-primary">Go to github</a>
//       <a href="mailto: ${teamMemberEmail}" id="email" class="btn btn-primary">Send an email</a>
//     </div>`;

const htmlTemplate = questionData => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <div class="d-flex justify-content-center bg-danger" id="banner">
            <h1 class="text-light">My Team</h1>
        </div>
    
    <!-- cards go here -->
    ${genMgrCards(questionData)}
    ${genMgrCards(questionData)}
    ${genMgrCards(questionData)}
    <div class="card m-4" id="cardHome" style="width: 18rem;">
    </div>
    
    </body>
    </html>`
};

module.exports = htmlTemplate;