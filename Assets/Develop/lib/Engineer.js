// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee"); 
// I needed to include the parent class calls and the extends with github added
class Engineer extends Employee {
    constructor(name, email, id, username) {
        super(name, email, id);
        this.username = username;
        this.role = "Engineer"
    }
    // include the new function of get for github
    getGithub(){
        return this.username;
    }
    // change the employee to "engineer
    getRole(){
        return this.role;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }

}

module.exports = Engineer;