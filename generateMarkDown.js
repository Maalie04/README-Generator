var badge;

const renderLicenseBadge = (licence) => {

};

const renderLicenseLink = (licence) => {`           `

};

const renderLicenseSection = (licence) => {

};

const generateMarkDown = (data) => {
    return `# Title: ${data.title}

         ##   Installation: ${data.installation}
         ##   Usage: ${data.usage}
         ##   Contribution: ${data.contribution}
         ##   Credits: ${data.credits}
         ##   License: ${data.licence}

   ## Contact
    * Github  :${data.github}
    * Linkedin:${data.linkedin}        
    * E-mail  :${data.Email}`
};

module.exports = generateMarkDown;