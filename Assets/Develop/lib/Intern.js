// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee"); 
// I needed to include the parent class calls and the extends with school added
class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school;
        this.title = "Intern";
    }
    // include the new function of get for school 
    getSchool(){
        return this.school;
    }
    // change the employee to "intern"
    getRole(){
        return "Intern";
    }

}

module.exports = Intern;