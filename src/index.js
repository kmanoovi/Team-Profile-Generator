const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ name, id, email, role}) =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Document</title>
</head>
<body>
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${role}</h5>
    <p class="card-text">${name}</p>
    <p class="card-info"> ${id} </p>
    <a href="#" class="btn btn-primary"> ${email} </a>
    <a href="#" class="btn btn-primary"> ${role2} </a>
  </div>
</div>
</body>
</html>`;

inquirer
.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your new employee?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is their role?',
        choices: ['Engineer', 'Intern', 'Manager'],
    },
  ])

if (this.role === 'Manager') {
    const managerAnswer = await inquirer.prompt ([
        {
            type: 'input',
            name: 'role2',
            message: 'What is the office number?',
        },
    ])
    const newManager = new Manager (
        this.name,
        this.id,
        this.email,
        managerAnswer.manager
    );
    newStaff.push(newManager);
} else if (answer.role === 'Engineer') {
    const engineerAnswer = await inquirer
    .prompt ([
        {
            type: 'input',
            name: 'role2',
            message: 'What is their Github username?',
        },
    ])
    const newEngineer = new Engineer (
        this.name,
        this.id,
        this.email,
        engineerAnswer.engineer
    );
    newStaff.push(newEngineer);
} else if (answer.role === 'Intern') {
    const internAnswer = await inquirer
    .prompt ([
        {
            type: 'input',
            name: 'role2',
            message: 'What is the name of their school?',
        },
    ])
    const newIntern = new ntern (
        this.name,
        this.id,
        this.email,
        internAnswer.intern
    );
    newStaff.push(newIntern);


then((answers) => {
    const htmlPageContent = generateHTML(answer);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
}