const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.username = github;
        this.role = 'Engineer';
        this.getGithub = function () {
            return this.github;
        }
    }
}

module.exports = Engineer;