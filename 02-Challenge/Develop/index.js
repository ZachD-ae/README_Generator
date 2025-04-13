// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";


// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        name: "title",
        message: "Enter the project title:",
      },
      {
        type: "input",
        name: "description",
        message: "Enter a project description:",
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions:",
      },
      {
        type: "input",
        name: "usage",
        message: "Enter usage information:",
      },
      {
        type: "input",
        name: "contributing",
        message: "Enter contribution guidelines:",
      },
      {
        type: "input",
        name: "tests",
        message: "Enter test instructions:",
      },
      {
        type: "list",
        name: "license",
        message: "Choose a license:",
        choices: ["MIT", "GPLv3", "Apache 2.0", "None"],
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub username:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email address:",
      },
];


// TODO: Create a function to write README file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log(`${fileName} has been successfully generated!`);
    }
  });
}

export { writeToFile };


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile("README.md", readmeContent);
    });
}

// Function call to initialize app
init();
