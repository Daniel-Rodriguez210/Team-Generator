// TODO: Write code to define and export the Employee class
// Created the parent class with name id and email
class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.id = id;
        this.email = email;

    }
    // Get functions 
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;