const renderLicenseBadge = (licence) => {

};

const renderLicenseLink = (licence) => {

};

const renderLicenseSection = (licence) => {

};

const generateMarkDown = (data) => {
    return `# ${data.title}

              ${data.installation}
              ${data.usage}
              ${data.contribution}
              ${data.credits}
              ${data.licence}

    # Contact
    * Github  :${data.github}
    * Linkedin:${data.linkedin}        
    * E-mail  :${data.Email}`
};

module.exports = generateMarkDown;