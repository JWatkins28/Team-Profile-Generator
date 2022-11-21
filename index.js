// VARIABLES FOR THE FUNCTIONS AND DEPENDENCIES
const inquirer = require('inquirer');
const genCards = require('./src/generateCards');
const genHTML = require('./src/generateHTML')
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer');

// INITIALIZING cards ARRAY
const cards = []

// FUNCTION FOR CARD GENERATION
const writeToFile = (data) => genCards.generateCards(data);

// MAKES SURE YOU CANT SUBMIT A BLANK ENTRY
const validateAnswer = (str) => {
  if (typeof str === "string") {
  str = str.replace(/\s+/g, '');  
  }
  if (str == "") {
    return "Please enter a valid input. Ex: Justin";
  } else {
    return true
  }
}

// MAKES SURE YOU DON'T SUBMIT A NON-NUMBER
const validateNum = (num) => {
  var numTest = /\d/g;
  if (!numTest.test(num)) {
    return "Please enter a valid number. Ex: 10";
  } else {
    return true
  }
}

// INITIALIZATION FUNCTION (PROMPTS FOR MANAGER)
const init = () => {
inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: validateAnswer
      },
      {
        type: 'input',
        name: 'id',
        message: `What is the team manager's id number?`,
        validate: validateNum
      },
      {
        type: 'input',
        name: 'email',
        message: `What is the team manager's email?`,
        validate: validateAnswer
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: `What is the team manager's office number?`,
        validate: validateNum
      },
    ])
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      const managerCard = writeToFile(manager);
      cards.push(managerCard)
      moreEmployees();
    });
}

// PROMPTS FOR OTHER EMPLOYEES
const moreEmployees = () => {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Would you like to add another employee to the team?',
      choices: [new inquirer.Separator(), 'Engineer', 'Intern', new inquirer.Separator(), "I'm Done!", new inquirer.Separator()],
    },
    {
      type: 'input',
      name: 'name',
      message: `What is the employee's name?`,
      when: (answers) => answers.role !== "I'm Done!",
      validate: validateAnswer
    },
    {
      type: 'input',
      name: 'id',
      message: `What is the employee's id number?`,
      when: (answers) => answers.role !== "I'm Done!",
      validate: validateNum
    },
    {
      type: 'input',
      name: 'email',
      message: `What is the employee's email?`,
      when: (answers) => answers.role !== "I'm Done!",
      validate: validateAnswer
    },
    {
      type: 'input',
      name: 'github',
      message: `What is the Engineer's github username?`,
      when: (answers) => answers.role === "Engineer",
      validate: validateAnswer
    },
    {
      type: 'input',
      name: 'school',
      message: `What school is the Intern studying at?`,
      when: (answers) => answers.role === "Intern",
      validate: validateAnswer
    },
  ])
  .then((answers) => {
      if (answers.role === "Engineer") {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        const engCard = writeToFile(engineer)
        cards.push(engCard)
        moreEmployees()
      } else if (answers.role === "Intern") {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        const intCard = writeToFile(intern)
        cards.push(intCard)
        moreEmployees()
      } else {
        const htmlContent = genHTML.generateHTML(cards)
        fs.writeFile('./dist/index.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Successfully generated index.html in the dist folder!')
      );
      }
  
  })
}

init();