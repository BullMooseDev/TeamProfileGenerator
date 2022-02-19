class Employee {
    constructor(name, id, email, github) {
        /* super(name, id, email); */

        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.role = role;
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

module.exports = Employee;