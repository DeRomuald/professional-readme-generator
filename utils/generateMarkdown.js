// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge =license =>{ 
  return (!license.length)?'':
  `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;

};              

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink =license => {
  return (!license.length)?'':
  '* [License](#license)';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection =license => {
  return (!license.length)?'':
  `${renderLicenseBadge(license)}`;  
};


// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  const{projectTitle,license,description, installation, usage, contributors,tests, acknowledgments,questions,userName,}= data;
  
  return `
  # ${projectTitle}
  
  ## Description

  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(license)} 
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## License

  ${renderLicenseSection(license)}

  ## Contributors

  ${contributors}

  ## Tests

  ${tests}

  ## Acknowlegements

  ${acknowledgments}

  ## Questions

  <br />
  :octocat: Find me on GitHub:(https://github.com/${userName})<br />
  <br />
  ✉️ Email me with any additional questions: ${questions}<br /><br />
  
  
 `;
}

module.exports = generateMarkdown;
