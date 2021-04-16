
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


let manager = [];
let engineer = [];
let intern = [];
let employeeArr = { manager, engineer, intern };

const questions = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What is your Role?',
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role'
        },
        {
            type: 'input',
            message: 'What is your Name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'What is your Email?',
            name: 'email'
        }

    ]).then(({ employee, id, email, role }) => {
        if (role === "Manager") {
            return inquirer
                .prompt([{
                    type: 'text',
                    message: "What is your office number?",
                    name: 'officeNum'
                },
                {
                    type: 'confirm',
                    message: "What you like to add another employee?",
                    name: 'addEmployee',
                    default: true
                }])
                .then(({ officeNum, addEmployee }) => {
                    manager.push(new Manager(employee, id, email, officeNum))
                    if (addEmployee) {
                        return questions();
                    }
                })
        } else if (role === "Engineer") {
            return inquirer
                .prompt([{
                    type: 'text',
                    message: "What is the Engineer's Github username?",
                    name: 'github'
                },
                {
                    type: 'confirm',
                    message: "What you like to add another employee?",
                    name: 'addEmployee',
                    default: true
                }])
                .then(({ github, addEmployee }) => {
                    engineer.push(new Engineer(employee, id, email, github))
                    if (addEmployee) {
                        return questions();
                    }
                })
        } else if (role === 'Intern') {
            return inquirer
                .prompt([{
                    type: 'text',
                    message: "Where do you attend school?",
                    name: 'school'
                },
                {
                    type: 'confirm',
                    message: "What you like to add another employee?",
                    name: 'addEmployee',
                    default: true
                }])
                .then(({ school, addEmployee }) => {
                    intern.push(new Intern(employee, id, email, school))
                    if (addEmployee) {
                        return questions();
                    }
                })
        }
    })
};
questions()

