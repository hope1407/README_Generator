
function generateMarkdown(data) {
  return `
# Welcome to ${data.title}!

## Table of Contents
- [Description](#description)\n
- Installation Instructions\n
- Usage Information\n
- Contribution Guidelines\n
- Test Instructions\n
- License\n
- [Creator Contact Information](#questions)

## Description <a name="description"></a>
${data.description}

## Installation Instructions
${data.installation}

## Usage Information
${data.usage}

## Contribution Guidelines
${data.contribution}

## Test Instructions
${data.test}

## License

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Questions <a name="questions"></a>
${data.name}: Follow and reach out to me on GitHub at https://github.com/${data.github}/ or email me at ${data.email}
`;
}

module.exports = generateMarkdown;
