const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email, office);
        this.officeNumber = office;
    }
    getRole() {
        return "Manager"
    }
};

module.exports = Manager