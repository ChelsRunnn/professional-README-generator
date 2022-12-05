// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// use switch expressions for logic, then call these functions in generateTemplate()
function renderLicenseBadge(license) { 
//   if (data.license == 'MIT') {
//     return ${`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`}
// // badge link from Github, just need to hook it up correctly
//   } else if (data.license == 'Apache License 2.0') {
//     [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
//   } else if (data.license == 'ISC') {
//     [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
//   } else {

//   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateTemplate(data) {
  return `# ${data.title} 


  ## Description 
  ${data.description}
  

  ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
  

  ## Installation 
  To use this app, follow these instructions on installation:
  ${data.installation} 


  ## Usage 
  This app is yours to use and explore, but if you'd like a starting point, follow these guidelines:
  ${data.usage}


  ## Credits
  This project was made possible with the help of the following people: 
  ${data.credits}
  

  ## License
  This project is covered by a ${data.license} license. For more information please visit the repo's license tab.
    

  ## Key Features
  ${data.features}
  

  ## How to Contribute
  If you have any questions or would like to contribute to this project, please reach me at ${data.howToContribute}.
`}

module.exports = generateTemplate;
