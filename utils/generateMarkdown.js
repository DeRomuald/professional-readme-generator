// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge =license =>{ 
  return (!license.length)?'':
  `https://img.shields.io/badge/license-${license}-9cf`;

};              

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink =license => {
  return (!license.length)?'':
  `* [License](#license)`;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection =license => {
  return (!license.length)?'':
  `## License ${license}`;  
};


// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  const{projectTitle,license,description, installation, usage, contributing,tests, acknowledgments,questions,userName}= data;
  
  return `
  # ${projectTitle}
  
  ${renderLicenseBadge(license)}
  
  ## Description
  ${description}

  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  ${renderLicenseLink(license)} 
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## License

  ${renderLicenseSection(license)}

  ## Contributing

  ${contributing}

  ## Tests

  ${tests}

  ## Acknowlegements

  ${acknowledgments}
  
  ## Questions

  ${questions}

  ## Username
  [Github account](https://github.com/${userName})
  
 `;
}

module.exports = generateMarkdown;
