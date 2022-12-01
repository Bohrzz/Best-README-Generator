// TODO: Include packages needed for this application
const fs = require("fs/promises");
const inquirer = require("inquirer");
const {generateMarkdown} = require("./utils/generateMarkdown");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "username",
    type: "input",
    message: "What is your Github username?",
  },
  {
    name: "email",
    type: "input",
    message: "What is your e-mail?",
  },
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "Description",
    type: "input",
    message: "Give a brief description of your project?",
  },
  {
    name: "Installation",
    type: "input",
    message: "How do you install the program?",
  },
  {
    name: "Usage Information",
    type: "input",
    message: "What does a user need to know to use this application?",
  },
  {
    name: "Contribution Guidelines",
    type: "input",
    message: "Who contributed to this project?",
  },
  {
    name: "Test Instructions",
    type: "input",
    message: "How do you test this application",
  },
  {
    name: "license",
    type: "list",
    message: "What liscense did you use?",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Success!");
  });
}

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions);
  const markdown = generateMarkdown(answers);
  writeToFile("README.md",markdown);
}

// Function call to initialize app
init();
