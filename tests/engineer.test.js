const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const { TestScheduler } = require('jest');

test('Can set GitHub account using constructor arg', () => {
    const testValue = 'username';
    const e = new Engineer('Foo', 1, 'test@email.com', testValue);
    expect(e.office).toBe(testValue);
});
test('getRole() should return \'Engineer\'', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'test@email.com', 100);
    expect(e.getRole()).toBe(testValue);
});
test('Can set GitHub usernmae using getGithub()', () => {
    const testValue = 'username';
    const e = new Engineer('Foo', 1, 'test@email.com', testValue);
    expect(e.getUserName()).toBe(testValue);
});