const fs = require('fs');
const htmlTemplate = require('../src/htmlTemplate')

const writeFile = htmlTemplate => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./index.html', htmlTemplate, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'HTML file created!'
        });
      });
    });
  };

  module.exports = {writeFile};