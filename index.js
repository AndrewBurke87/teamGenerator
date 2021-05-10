
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const util = require('util');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const MainTemplate = require('./templates/main');
const ManagerTemplate = require('./templates/manager');
const EngineerTemplate = require('./templates/engineer');
const InternTemplate = require('./templates/intern');
const writeFileAsync = util.promisify(fs.writeFile);

const employeeArr = [];

const questions = () => {
    return inquirer.prompt([
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
        },
        {
            type: 'text',
            message: 'What is your employee id number?',
            name: 'id'
        }


    ]).then(({ name, email, id, role }) => {
        console.log(name);
        console.log(email);
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
                    const manager = new Manager(name, id, email, officeNum)
                    employeeArr.push(ManagerTemplate(manager))
                    if (addEmployee) {
                        return questions();
                    } else {
                        generateHTML(employeeArr)
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
                    const engineer = new Engineer(name, id, email, github)
                    employeeArr.push(EngineerTemplate(engineer))
                    if (addEmployee) {
                        return questions();
                    }
                    // else {
                    // generateHTML(employeeArr)
                    // }
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
                    const intern = new Intern(name, id, email, school)
                    employeeArr.push(InternTemplate(intern))
                    if (addEmployee) {
                        return questions();
                    } else {
                        generateHTML(employeeArr)
                    }
                })
        }
    })
};

generateHTML = (answers) => {
    console.log("hello", answers)
    const employeeCards = answers.join(',');
    const generateTeam = MainTemplate(employeeCards)

    return generateTeam;


}
questions()
    .then(() => writeFileAsync('bestTeam.html', generateHTML(employeeArr)))
    .then(() => console.log('Successfully wrote to bestTeam.html'))
    .catch((err) => console.error(err))

