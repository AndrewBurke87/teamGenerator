const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, email, id, officeNum) {
        super(name, email, id);
        this.officeNum = officeNum;
        this.role = 'Manager';
        this.getOfficeNumber = function () {
            return this.officeNum;
        }
    }
};

module.exports = Manager;