const Employee = require('../employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Joe');

    expect(employee.name).toBe(getName());
    expect(employee.id).toBe(getId());
    expect(employee.email).toBe(getEmail());
    expect(employee.github).toBe(getGithub());
    epxect(employee.role).toBe(getRole());
    expect(employee.officeLocation).toBe(getOffice());
});