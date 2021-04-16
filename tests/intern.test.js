const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');
const { TestScheduler } = require('jest');

test('Can set school using constructor arg', () => {
    const testValue = 1000;
    const e = new Intern('Foo', 1, 'test@email.com', testValue);
    expect(e.office).toBe(testValue);
});
test('getRole() should return \'Intern\'', () => {
    const testValue = 'Intern';
    const e = new Intern('Foo', 1, 'test@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});
test('Can set school using getSchool()', () => {
    const testValue = UofU;
    const e = new Intern('Foo', 1, 'test@email.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});