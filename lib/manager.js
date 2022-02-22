const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeName, id, email, office) {
        super(employeeName, id, email, office);
        this.officeNumber = office;

    }
    getRole() {
        return "Manager"
    }
};

module.exports = Manager