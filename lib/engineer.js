const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email, office);
        
        this.github = github;
    }
    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer;