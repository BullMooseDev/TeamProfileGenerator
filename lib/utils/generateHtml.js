const fs = require('fs');

const writeFile = htmlContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./index.html', htmlContent, err => {
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