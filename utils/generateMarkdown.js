// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   console.log(license);
//   if (license === "MIT" || license === "APACHE-2.0") {
//     return
//     `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`;
//   }
//   return "unlicensed"
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license === "MIT" || license === "APACHE-2.0") {
//     return ``
//   }

//   return "unlicensed"
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})
[License: ${license}](https://opensource.org/licenses/${license})`;
  }
  return "unlicensed";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## license section 
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}
  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributing](#contributing)
  [Testing](#tsets)
  [Questions](#questions)
  
  ## Installation
  ${data.installation}
    ## Usage
  ${data.usage}
    ## License
  ${data.license}
    ## Contributing
  ${data.contribution}
    ## Tests
  ${data.test}
    ## Questions

    #Github Username: [${data.github}](http://github.com/${data.github})

`
}

module.exports = { generateMarkdown };
