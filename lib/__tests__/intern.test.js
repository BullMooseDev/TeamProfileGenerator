const Intern = require('../intern');

test('creates an Employee object', () => {
    const intern = new Intern('John', 'id', 'email', 'university');

    expect(Intern.employeeName).toBe(this.employeeName);
    expect(Intern.id).toBe(this.id);
    expect(Intern.email).toBe(this.email);
    expect(Intern.email).toBe(this.school);
});