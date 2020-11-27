// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee"); 
// I needed to include the parent class calls and the extends with github added
class Engineer extends Employee {
    constructor(name, email, id, github) {
        super(name, email, id);
        this.github = github;
        this.title = "Engineer"
    }
    // include the new function of get for github
    getGithub(){
        return this.github;
    }
    // change the employee to "engineer
    getRole(){
        return "Engineer";
    }

}

module.exports = Engineer;