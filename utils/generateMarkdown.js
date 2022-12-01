// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ## Description 
    ${data.description}
  
  ## Table of Contents ${data.toC}
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

  ## ${data.credits}
    List your collaborators, if any, with links to their GitHub profiles.
    
    If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
    
    If you followed tutorials, include links to those here as well.
  
  ## License
    This project is covered by a ${data.license} license. For more information please visit the repo's license tab.

  ## Badges 
    ${data.badges}
    ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
  ## Features
    Key features of this app include:
    ${data.features}
  
  ## How to Contribute 
    If you have any questions or would like to contribute to this project, please reach me at ${data.howToContribute}
    
`;
}

module.exports = generateMarkdown;
