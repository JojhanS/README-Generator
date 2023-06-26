// TODO: Create a function that returns a license badge based on which license is passed in
// ['GNU AGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', ''],
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${data.license}-blue.svg)`;
  }
  // If no license is provided, return an empty string
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `This project is licensed under the [${license}](LICENSE) license.`;
  }
  // If no license is provided, return an empty string
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License

${renderLicenseBadge(license)}

${renderLicenseLink(license)}
`;
  }
  return '';
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.Usage}

## Contributions
${data.contributions}

## Tests
${data.tests}

`;
}

module.exports = generateMarkdown;
