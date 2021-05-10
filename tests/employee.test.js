// using Employee constructor 
const Employee = require('../lib/Employee');

// using Manager constructor 
describe("employee", () => {
    describe("name", () => {
        it("should return new manager name", () => {
            let name = "foo";
            let newEmp = new Employee(name);
            expect(newEmp.name).toBe("foo");
        })
    })
    describe("id", () => {
        it("should return new manager id", () => {
            let id = "10";
            let newEmp = new Employee("", "", id);
            expect(newEmp.id).toBe("10");
        })
    })
    describe("email", () => {
        it("should return new manager email", () => {
            let email = "foo@email.com";
            let newEmp = new Employee("", email);
            expect(newEmp.email).toBe("foo@email.com");
        })
    })
})

