//TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  if (license && typeof license === "string" && license !== "None") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license && typeof license === "string" && license !== "None") {
    return `\n [${license}](#license) \n`;
  }

  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license && typeof license === "string" && license !== "None") {
    return `### License \n
    _This project is licensed under the ${license} license._`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ## Description
  ${data.Description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Testing](#tsets)
  [Questions](#questions)
  
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ## Contributing
  ${data.Contribution}
    ## Tests
  ${data.Test}
 

    #Github Username: [${data.username}](http://github.com/${data.username})

`;
}

module.exports = { generateMarkdown };
