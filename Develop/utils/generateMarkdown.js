// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license/${license}-blueviolet.svg)`;
  } else {
    return "";
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `* [License](#license)`;
  } else {
    return "";
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License

Project protected by the ${license} license`;
  } else {
    return "";
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // use ${something} to call functions inside of template literals 
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contribution Guidelines](#contributions)
* [Testing](#testing)
* [Questions](#questions)

## Installation

Run this command to install dependecies required for this code:

  ${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributions

${data.contributing}

## Testing

Run this command to run tests:

  ${data.test}

## Questions?

If you have questions about the repository/code, please feel free to contact me!
${data.email}

And also check out my other repos at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
