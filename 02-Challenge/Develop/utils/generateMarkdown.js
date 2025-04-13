// Function to return a license badge based on the selected license
function renderLicenseBadge(license) {
  if (!license || license === "None") {
    return "";
  }

  const badges = {
    MIT: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    GPLv3: "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)",
    "Apache 2.0": "![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-red.svg)",
  };

  return badges[license] || "";
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license || license === "None") {
    return "";
  }

  const licenseLinks = {
    MIT: "[MIT License](https://opensource.org/licenses/MIT)",
    GPLv3: "[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)",
    "Apache 2.0": "[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)",
  };

  return licenseLinks[license] || "";
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license || license === "None") {
    return "";
  }

  return `## License  
This project is licensed under the ${license} license.  
For more details, see ${renderLicenseLink(license)}.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}

## Questions
For any questions, contact me at:  
GitHub: [${data.github}](https://github.com/${data.github})  
Email: ${data.email}
`;
}

export default generateMarkdown;
