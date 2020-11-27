// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee"); 

// I needed to include the parent class calls and the extends with office number added
class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
    }
    // include the new function of get for office number
    getOfficeNumber(){
        return this.officeNumber;
    }
    // change the employee to "Manager"
    getRole(){
        return "Manager";
    }

}

module.exports = Manager;