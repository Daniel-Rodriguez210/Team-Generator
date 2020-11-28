// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require("./Employee"); 

// I needed to include the parent class calls and the extends with office number added
class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, email, id);
        this.officenumber = officenumber;
        this.role = "Manager"
    }
    // include the new function of get for office number
    getOfficeNumber(){
        return this.officenumber;
    }
    // change the employee to "Manager"
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

module.exports = Manager;