const employees = require('../../index')
const index = require('../../index');


function genCards(employees) {
    const templateArray = employees.forEach(element => {
        if(element.getRole() == "Manager") {
            `
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">${element.name} <br>${element.getRole()} <br>${element.officeNumber} <br>${element.id} </p>
              <a href="https://github.com/test" id="github" class="btn btn-primary">Go to github</a>
              <a href="mailto: ${element.email}" id="email" class="btn btn-primary">Send an email</a>
            </div>`
        } if (element.getRole() == "Engineer") {
            engTemplate +=`
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">${element.name} <br>${element.getRole()} <br>${element.officeNumber} <br>${element.id} <br>${element.github} </p>
              <a href="https://github.com/test" id="github" class="btn btn-primary">Go to github</a>
              <a href="mailto: ${element.email}" id="email" class="btn btn-primary">Send an email</a>
            </div>`
        } if (element.getRole() == "Intern") {
            intTemplate +=`
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">${element.name} <br>${element.getRole()} <br>${element.school} <br>${element.id} </p>
              <a href="https://github.com/test" id="github" class="btn btn-primary">Go to github</a>
              <a href="mailto: ${element.email}" id="email" class="btn btn-primary">Send an email</a>
            </div>`
        }
    });
    return templateArray;
}

const htmlTemplate = templateArray => {
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
    ${genCards(templateArray)}

    <div class="card m-4" id="cardHome" style="width: 18rem;">
    </div>
    
    </body>
    </html>`
};

module.exports = htmlTemplate;