
function generateMarkdown(data) {
  return `
# Welcome to ${data.title}!

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Description
${data.description}
`;
}

module.exports = generateMarkdown;
