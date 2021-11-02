const Employee = require("./Employee");
//take the employee constructor and add to it with
//the engineer constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github; 
    }

    getGithub () {
        return this.github;
    }

    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 