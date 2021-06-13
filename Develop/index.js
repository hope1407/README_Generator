const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
  ]);
};

const generateREADME = (answers) =>
`## Hello this is ${answers.name}`;

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote a README file'))
    .catch((err) => console.error(err));
};

init();