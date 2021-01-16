//npm init -y
//npm i inquirer

/*ReadME needs: 
1-inquirer
2-fs
3-.prompt

github username that gives link inside questions
email address in questions




*/
const fs = require('fs')
const inquirer = require('inquirer')
const Choice = require('inquirer/lib/objects/choice')

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
        },
        {
            type: "input",
            name: 'contributing',
            message: "Please provide contribution guidelines."
        },
        {
            type: "input",
            name: 'testing',
            message: "Please provide testing instructions."
        },
        {
            type: "checkbox",
            name: 'license',
            message: "Please choose a license.",
            choices: ["MIT", "Apache license 2.0", "None"]
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email address."
        }

    ])
        .then((response) => {
        console.log(response)
        const data = `
        # ${response.title}

        ${response.description}

        ## TABLE OF CONTENTS

        ## INSTALLATION

        ${response.installation}

        ## USAGE

        ${response.usage}

        ## CONTRIBUTING

        ${response.contributing}
        
        ## TESTING

        ${response.testing}

        ## QUESTIONS
            For additional questions, please get in touch:
        https://github.com/${response.github}
        ${response.email}

        ## LICENSE
        `


        fs.writeFile('./assets/README.md', data, (e) => {
            e ? console.error(e) : console.log('success')
        })
  })  


    /*badge html 
    <img alt="GitHub" src="https://img.shields.io/github/license/lauraaupert/readme_generator">
    */
     //      return `
//     ${title ? `
//       This element has a title, and it is "${title}"
//     ` : `
//       This element does not have a title.
//     `}
//   `
//         .prompt([
        
//     ])

//       .then((response) => {
//         if (response.usage !== '') {
//             {
//             const usage =`
//              ## USAGE
//              ${response.usage}  `
             
//          }
//         }
//## ${response.usage ? `USAGE` + `\n${response.usage}\n` : ""}

 
//       })
    