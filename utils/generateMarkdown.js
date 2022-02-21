// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string.
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string.
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `You can find more information about this license at [${license}](https://opensource.org/licenses/${license}).` 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string.
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return [
      `## License \n Project developed under the ${license} license.`,
      `- [License](#License)` ,
    ]
  }
}

// TODO: Create a function to generate markdown for README
// Include screenshots under Description
// Include walkthrough video under questions
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${renderLicenseSection(data.license)[1]}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)[0]}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Checkout the [walkthrough video]() for a step-by-step introduction to the project.
  For feedback about the project you can reach me at [${data.github}](${data.link}),
  or via email at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;
