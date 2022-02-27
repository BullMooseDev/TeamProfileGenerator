const Manager = require('../manager');

test('creates an Employee object', () => {
    const employee = new Employee('Joe', 'id', 'email');

    expect(Employee.employeeName).toBe(this.employeeName);
    expect(Employee.id).toBe(this.id);
    expect(Employee.email).toBe(this.email);
});