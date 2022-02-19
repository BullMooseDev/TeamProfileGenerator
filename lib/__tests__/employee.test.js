          const Employee = require('../employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Joe');

    expect(employee.name).toBe(getName());
    expect(employee.id).toBe(getId());
    expect(employee.email).toBe(getEmail());
    epxect(employee.role).toBe(getRole());
});