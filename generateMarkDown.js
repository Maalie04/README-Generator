
//     [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

// };

const renderLicenseLink = (license) => {

    if (license === 'Apache%202.0') {
        return ("https://opensource.org/licenses/Apache-2.0")

    }

    if (license === 'MIT%20License') {
        return ("https://opensource.org/licenses/MIT")
    }

    if (license === 'Mozilla%20Public%20Liscense') {
        return ("https://opensource.org/licenses/MPL-2.0")
    }

};

const renderLicenseSection = (license) => {

};

const generateMarkDown = (data) => {
return `
# Title: 
${data.Title}
![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)

${renderLicenseLink(data.license)}

# Table of Contents 
* [description](#description)
* [installation](#installation)
* [usage](#usage)
* [contribution](#contribution)

## Installation: 
${data.Installation}
## Usage: 
${data.Usage}
## Contribution: 
${data.Contributions}
## License: 

## Contact
    * Github  : ${data.Github}
    * Linkedin: ${data.Linkedin}       
    * E-mail  : ${data.Email}`
};

module.exports = generateMarkDown;