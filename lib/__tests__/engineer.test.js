const Engineer = require('../engineer');

test('creates an Employee object', () => {
    const engineer = new Engineer('jack', '123', 'email', '456', 'github');

    expect(Engineer.employeeName).toBe(this.employeeName);
    expect(Engineer.id).toBe(this.id);
    expect(Engineer.email).toBe(this.email);
    expect(Engineer.office).toBe(this.office);
    expect(Engineer.github).toBe(this.github);
});