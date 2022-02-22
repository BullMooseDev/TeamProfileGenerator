class Employee {
    constructor(employeeName, id, email) {
        /* super(name, id, email); */

        this.name = employeeName;
        this.id = id;
        this.email = email;
    }

    getRole () {
        return "Employee"
    }
};

let getRole = () => {
    switch (role) {
        case 'intern':
            this.role += intern;
            break;
        case 'manager':
            this.manager += manager;
            break;
        case 'engineer':
            this.engineer += engineer;
            break;
    };
};

let getName = () => {
    return employeeName;
}

let getId = () => {
    return idNumber;
}

let getEmail = () => {
    return teamMemberEmail;
}

let getGithub = () => {
    return githubUserName;
}

let getOffice = () => {
    return officeLocation;
}

module.exports = Employee;