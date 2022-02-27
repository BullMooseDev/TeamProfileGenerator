class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole () {
        return "Employee"
    }
};

/* let getRole = () => {
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
}; */

let getName = () => {
    return this.name;
}

let getId = () => {
    return this.id;
}

let getEmail = () => {
    return this.email;
}

let getGithub = () => {
    return this.github;
}

module.exports = Employee;