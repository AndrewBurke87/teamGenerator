const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, email, id);
        this.school = school;
        this.role = 'Intern';
        this.getSchool = function () {
            return this.school;
        }
    }
};

module.exports = Intern;