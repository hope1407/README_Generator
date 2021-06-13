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
      message: 'Please describe your application using two to three sentences.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Who can use this application and how?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide any necessary installation instructions.'
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Please provide any necessary contribution guidelines.'
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please provide any necessary testing guidelines.'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
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