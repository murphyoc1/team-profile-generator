const Employee = require('./Employee');
//add Intern to employee constructor
class Intern extends Employee  {
    constructor (name, id, email, school) {
        super (name, id, email); 
        this.school = school; 
    }
    getSchool () {
        return this.school;
    }
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 