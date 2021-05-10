const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, email, id);
        this.github = github;
        this.role = 'Engineer';
        this.getGithub = function () {
            return this.github;
        }
    }
}

module.exports = Engineer;