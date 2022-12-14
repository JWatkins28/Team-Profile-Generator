const Employee = require('./Employee');

// INTERN CLASS EXTENDING EMPLOYEE
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern"
    }
}

module.exports = Intern;