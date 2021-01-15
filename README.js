//npm init -y
//npm i inquirer

/*ReadME needs: 
1-inquirer
2-fs
3-.prompt


*/

const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: "input",
            name: 'title',
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: 'description',
            message: "Please briefly describe this project."
        },
        {
            type: "input",
            name: 'installation',
            message: "Please share any instructions for installation."
        },
        {
            type: "input",
            name: 'usage',
            message: "Provide usage information now."
        }
        {
            type: "input",
            name: 'contributors',
            message: "Please provide contribution guidelines."
        },

    ])
