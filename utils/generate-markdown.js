
function generatelicenseBadge(license){
    const licenseName = encodeURIComponent(license.replace('-', ' '))

return `![${license}-licensed](https://img.shields.io/badge/license-${licenseName}-orange)
`
}

function generateMarkdown({
title,
license,
github,
description,
dependencies,
usage,
contributing,
tests,
}) {
return `

# ${title}
${generatelicenseBadge(license)}

## Description
${description}

## Table of Contents
* [Installation](#installation)

* [Usage](#usage)

* [Tests](#tests)

* [Questions](#questions)
## Installation
To insstall necessary dependencies, run the following command:
'''
${dependencies}
'''
## Usage

${usage}
## Contributing

${contributing}
## Tests

${tests}
## Contact

Visit my github profile: [${github}](https://github.com/${github})
`
}

module.exports = generateMarkdown;
