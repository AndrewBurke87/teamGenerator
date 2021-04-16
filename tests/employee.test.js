const Employee = require('./lib/Employee');

test('Can start Employee instance', () => {
    const e = new Employee();
    expect(typeof (e)).toBe('object');
});
test('Can set name  constructor arg', () => {
    const name = 'jane';
    const e = new Employee(name);
    expect(e.name).toBe(name);
});
test('Can set Email constructor arg', () => {
    const testValue = 'test@email.com';
    const e = new Employee('foo', 1, testValue);
    expect(e.email).toBe(testValue);
});
test('Can set id  constructor arg', () => {
    const testValue = 1000;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('Get name using getName()', () => {
    const testValue = 'jane';
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});
test('Get email using getEmail()', () => {
    const testValue = 'test@email.com';
    const e = new Employee('foo', 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});
test('Get id using getId()', () => {
    const testValue = 1000;
    const e = new Employee('foo', testValue);
    expect(e.getId).toBe(testValue);
});
test('Get role using getRole()', () => {
    const testValue = 'Employee';
    const e = new Employee('jane', 1, "test@email.com");
    expect(e.getRole).toBe(testValue);
});