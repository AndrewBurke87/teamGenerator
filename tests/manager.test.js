// using Manager constructor 
const Manager = require('../lib/Manager');

describe("manager", () => {
    describe("officeNumber", () => {
        it("should return new manager office number", () => {
            let officeNum = "10";
            let newEmp = new Manager("", "", "", officeNum);
            expect(newEmp.officeNum).toBe("10");
        })
    })
    describe("name", () => {
        it("should return new manager name", () => {
            let name = "foo";
            let newEmp = new Manager(name);
            expect(newEmp.name).toBe("foo");
        })
    })
    describe("id", () => {
        it("should return new manager id", () => {
            let id = "10";
            let newEmp = new Manager("", id);
            expect(newEmp.id).toBe("10");
        })
    })
    describe("email", () => {
        it("should return new manager email", () => {
            let email = "foo@email.com";
            let newEmp = new Manager("", "", email);
            expect(newEmp.email).toBe("foo@email.com");
        })
    })
})

