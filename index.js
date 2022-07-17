const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generate-markdown');

const fs = require('fs/promises');
const path = require('path');

// Goal : generate a readme file for future projects

// questions to ask:

// what is project title

//license-choices
//github

inquirer.prompt([
    {
       type: 'input',
       message: "what is the project title?",
       name: 'title',
    },
    {
        type: 'list',
        message: "what is the license?",
        name: 'license',
        choices:[
            'MIT', 'GPL-v2', 'Apache-v2', 'No license',
        ]
     },
     {
        type: 'input',
        message: "what is your github username?",
        name: 'github',
     },
     
     {
        type: 'input',
        message: "Please write a short description of your project",
        name: 'description',
     },
     {
        type: 'input',
        message: "What command should be run to install dependencies?",
        name: 'dependencies',
     },
     {
        type: 'input',
        message: "What does the User need to know about using the repo?",
        name: 'usage',
     },
     {
        type: 'input',
        message: "What does the User need to know about contributing to the repo?",
        name: 'contributing',
     },
     {
        type: 'input',
        message: "What command should be run to run tests?",
        name: 'tests',
     },
])
//description, installation instructions, usage information, contribution guidelines, and test instructions
//email
//github
.then((ans)=>{
    // once asked
    console.log(ans);
    const markdown = generateMarkdown(ans);

    //genrate a readme file based on the responses
    //in the output folder
    const outputPath = path.join(__dirname, 'output', 'generated.md');

    fs.writeFile(outputPath, markdown, 'utf-8')
    .then(()=>{
        console.log('generated!')
        
    });
 
})






