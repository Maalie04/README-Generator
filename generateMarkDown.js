var badge;

const renderLicenseBadge = (licence) => {

    if(licence === 'Apache-2.0'){
return https://img.shields.io/badge/License-Apache%202.0-blue.svg;
    }

    if( licence === 'MIT License'){
return (https://img.shields.io/badge/License-MIT-yellow.svg);
    }

    if(licence === 'Mozilla Public Liscense'){
return (https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg);
    }
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

};

const renderLicenseLink = (licence) => {

    if(licence === 'Apache-2.0'){
        return (https://opensource.org/licenses/Apache-2.0)

    }

    if( licence === 'MIT License'){

    }

    if(licence === 'Mozilla Public Liscense'){

    }

};

const renderLicenseSection = (licence) => {

};

const generateMarkDown = (data) => {
    return `# Title: ${data.Title}

##   Installation: 
${data.Installation}
##   Usage: 
${data.Usage}
##   Contribution: 
${data.Contributions}
##   License: 
${data.Licence}

   ## Contact
    * Github  : ${data.Github}
    * Linkedin: ${data.Linkedin}        
    * E-mail  : ${data.Email}`
};

module.exports = generateMarkDown;