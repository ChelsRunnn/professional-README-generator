// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) { 
  if (data.license == 'MIT') {
    return `![license-badge](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (data.license == 'Apache License 2.0') {
    return `![license-badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
  else if (data.license == 'ISC') {
    return `![license-badge](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else {return};
}


// Function that returns the license link
function renderLicenseLink(data) { 
  if (data.license == 'MIT') {
    return ('https://choosealicense.com/licenses/mit/');
  }
  else if (data.license == 'Apache License 2.0') {
    return ('https://choosealicense.com/licenses/apache-2.0/');
  }
  else if (data.license == 'ISC') {
    return('https://choosealicense.com/licenses/isc/');
  } else {
    return ('')
  };
}

// Function that returns the license section of README
function renderLicenseSection(data) { 
  if (data.license == 'MIT') {
    return `This project is covered with an MIT license ${data}. For more information on what that means, visit the license page here, ${data}.` 
  }
  else if (data.license == 'Apache License 2.0') {
    return `This project is covered with an Apache License 2.0 ${renderLicenseBadge()}. For more information on what that means, visit the license page here, ${renderLicenseLink()}.`
  }
  else if (data.license == 'ISC') {
    return `This project is covered with a ISC license ${renderLicenseBadge()}. For more information on what that means, visit the license page here, ${renderLicenseLink()}.`
  } else {return ('')};
}

// Function to generate markdown template for README
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
  This work is cover by a ${renderLicenseBadge(data)}. For more information on that, visit the license page here, ${renderLicenseLink(data)}.


  ## Key Features
  ${data.features}
  

  ## How to Contribute
  If you have any questions or would like to contribute to this project, please reach me at ${data.howToContribute} or on GitHub at ${data.gitHub}.
`}

module.exports = generateTemplate;
