// using Manager constructor 
const Engineer = require('../lib/Engineer');

describe("engineer", () => {
    describe("github", () => {
        it("should return new engineer github username", () => {
            let github = "foobar";
            let newEmp = new Engineer("", "", "", github);
            expect(newEmp.github).toBe("foobar");
        })
    })
    describe("name", () => {
        it("should return new engineer name", () => {
            let name = "foo";
            let newEmp = new Engineer(name);
            expect(newEmp.name).toBe("foo");
        })
    })
    describe("id", () => {
        it("should return new engineer id", () => {
            let id = "10";
            let newEmp = new Engineer("", id);
            expect(newEmp.id).toBe("10");
        })
    })
    describe("email", () => {
        it("should return new engineer email", () => {
            let email = "foo@email.com";
            let newEmp = new Engineer("", "", email);
            expect(newEmp.email).toBe("foo@email.com");
        })
    })
})

