const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const { TestScheduler } = require('jest');

test('Can set Office Number using constructor arg', () => {
    const testValue = 1000;
    const e = new Manager('Foo', 1, 'test@email.com', testValue);
    expect(e.office).toBe(testValue);
});
test('getRole() should return \'Manager\'', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'test@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});
test('Can set office number using getOfficeNumber()', () => {
    const testValue = 1000;
    const e = new Manager('Foo', 1, 'test@email.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});