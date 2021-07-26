var badge;

const renderLicenseBadge = (licence) => {

};

const renderLicenseLink = (licence) => {`           `

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