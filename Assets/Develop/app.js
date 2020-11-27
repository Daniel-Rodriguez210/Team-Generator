const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = []


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function beginProgram () {
inquirer.prompt([
        {
            /* Questions for person creating the team*/
        type: "Input",
        message: "What is your name?",
        name: "Name"

        },
        {
        type: "Input",
        message: "What is your ID?",
        name: "ID"

        },
        {
        type: "Input",
        message: "What is your Email?",
        name: "Email"

        },
        {
        type: "rawlist",
        message: "What is your Role?",
        name: "Role",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
        ]     
    }])
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email 
            const role = data.role
            const addition = member(name, id, email, role)
            teamMembersArray.push(addition)
            addAnotherPerson();
        }) 
};

function addAnotherPerson() {
    inquirer.prompt([
        {
            type: "rawlist",
            message: "Would you like to add another person to your team?",
            choices: ["Yes, Manager","Yes, Engineer","Yes, Intern", "No"],
            name: "newPersonData"
        }
    ])
        .then(function(data) {
            switch(data.newPersonData) {
                case "Yes, Manager":
                    addManager();
                    break;
                    
                    case "Yes, Engineer":
                    addEngineer();
                    break;

                    case "Yes, Intern":
                    addIntern();
                    break;

                    case "No":
                    finishTeam();
                    break;
            }
        })
    };

    function addManager() {
        inquirer.prompt ([
            {
                type: "Input",
                message: "What is the manager's name?",
                name: "name"
            },
            {
                type: "Input",
                message: "What is the manager's ID?",
                name: "ID"
            },
            {
                type: "Input",
                message: "What is the manager's Email?",
                name: "Email"
            },
            {
                type: "Input",
                message: "What is the manager's office number?",
                name: "officenumber"
            }
        ])
            .then(function(data) {
                const name = data.name
                const id = data.id
                const email = data.email
                const officenumber = data.officenumber
                const addition = member(name, id, email, officenumber)
                teamMembersArray.push(addition)
                addAnotherPerson()
            })
    } 
    
function addEngineer() {
    inquirer.prompt ([
        {
            type: "Input",
            message: "What is your engineer's name?",
            name: "name"
        },
        {
            type: "Input",
            message: "What is the engineer's Github username?",
            name: "username",
        },
        {
            type: "Input",
            message: "What is the engineer's email? ",
            name: "Email"
        },
        {
            type: "Input",
            message: "What is the engineer's ID?",
            name: "ID"
    
            }
    ])
        .then(function(data) {
            const name = data.name
            const username = data.username
            const email = data.email
            const id = data.id
            const addition = member(name, username, email, id)
            teamMembersArray.push(addition)
            addAnotherPerson()
        })
};    

function addIntern() {
    inquirer.prompt ([
        {
            type: "Input",
            message: "What is your intern's name?",
            name: "name"
        },
        {
            type: "Input",
            message: "What is the intern's ID?",
            name: "ID"
    
        },
        {
            type: "Input",
            message: "What is the intern's email? ",
            name: "Email"
        },
        {
            type: "Input",
            message: "What is the intern's school? ",
            name: "School"
        }
        
    ])
        .then(function(data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school 
            const addition = member(name, id, email, school)
            teamMembersArray.push(addition)
            addAnotherPerson()
        })
};



beginProgram();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```



