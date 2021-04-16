const inquire = require("inquirer")
class Employee {
    constructor(name, email, id, role) {
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = role || 'Employee';
        this.getName = function () {
            return this.name;
        };
        this.getEmail = function () {
            return this.email;
        };
        this.getId = function () {
            return this.id;
        };
        this.role = function () {
            return this.role;
        };

    }
};

const employees = [];
var johnDoe = new Employee('John Doe', 0, 'john@email.com', 'manager');
module.exports = Employee;