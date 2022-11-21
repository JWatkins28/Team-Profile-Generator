const Employee = require('./Employee');

// ENGINEER CLASS EXTENDING EMPLOYEE
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub(){
        return `https://github.com/${this.github}`
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer;