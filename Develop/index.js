const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ["MIT", "BSD3"]
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your application using two to three sentences:',
    },
  ]);
};

// const generateREADME = (answers) =>
// `## Welcome to ${answers.name}!`;

const init = () => {
  promptUser()
    .then((answers) => {
      console.log('Successfully wrote a README file');
      writeFileAsync('README.md', generateMarkdown(answers));
    })
    .catch((err) => console.error(err));
};

init();