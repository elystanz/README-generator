// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "What is your project description?"
    },

    {
        type: "input",
        name: "installation",
        message: "What command will be run to install dependencies?"
    },

    {
        type: "input",
        name: "usage",
        message: "What should the user know about utilizing this repository?"
    },
    
    {
        type: "input",
        name: "contributing",
        message: "How can contributions be made to this project?"
    },

    {
        type: "input",
        name: "test",
        message: "What command will be used to run tests?"
    },

    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["Apache 2.0", "BSD-3", "BSD-2", "GPL", "LGPL", "MIT", "None"]
    },

    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What is your email?"
    }

];

// TODO: Create a function to write README file

// create the README file in the working directory
function writeToFile(fileName, data) {
    // use return to end the function
   fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app

// pass questions array to user via inquirerer, then pass the writeToFile to fill in data in README
function init() {
    inquirer.prompt(questions).then(inquirerResponses => {
        console.log("Generating your README...!");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    });
}

// Function call to initialize app
init();
