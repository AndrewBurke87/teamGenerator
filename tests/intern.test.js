// using Manager constructor 
const Intern = require('../lib/Intern');

describe("intern", () => {
    describe("school", () => {
        it("should return new intern office number", () => {
            let school = "uofu";
            let newEmp = new Intern("", "", "", school);
            expect(newEmp.school).toBe("uofu");
        })
    })
    describe("name", () => {
        it("should return new intern name", () => {
            let name = "foo";
            let newEmp = new Intern(name);
            expect(newEmp.name).toBe("foo");
        })
    })
    describe("id", () => {
        it("should return new intern id", () => {
            let id = "10";
            let newEmp = new Intern("", id);
            expect(newEmp.id).toBe("10");
        })
    })
    describe("email", () => {
        it("should return new intern email", () => {
            let email = "foo@email.com";
            let newEmp = new Intern("", "", email);
            expect(newEmp.email).toBe("foo@email.com");
        })
    })
})

