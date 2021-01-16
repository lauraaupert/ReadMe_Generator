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
            type: "rawlist",
            name: 'license',
            message: "Please choose a license.",
            choices: [
                 "MIT",
                 "Apache",
                 "None"
            ]
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
        },
        {
            type: "input",
            name: "repo",
            message: "Please enter the name of your repo."
        }


    ])
        .then((response) => {
        //missing if statement for if they want a license
        const badge = 
        response.license === "MIT" ? `![GitHub](https://img.shields.io/github/license/${response.github}/${response.repo})` : ``
        || response.license === "Apache" ? `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]` : ``

        //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
        //const badge = `![GitHub](https://img.shields.io/github/license/${response.github}/${response.repo})`
 
        const title = `
# ${response.title}

${response.description}

## TABLE OF CONTENTS`



const installation = () => {
    if (response.installation) {
        return `

## INSTALLATION

${response.installation}
`
            
        } else if (response.installation === "") {
            return ``
        }
    }

            const usage = () => {
                if (response.usage) {

                return ` 
## USAGE

${response.usage}
`
                } else if (response.usage === "") {
                    return ``
                    
            } 
        }


        const contributing = () => {
            if (response.contributing) {

                 return ` 
## CONTRIBUTING

${response.contributing}
`
            } else if (!response.contributing) {

                return ``
                } 
        }
        const testing = () => {
            if (response.testing) {

                return          `
## TESTING

${response.testing}
`
        } 

                 else if (response.testing === '') {
                     return ``

            
    }
}

        const questions = () => {
            if (response.github && response.email) {
                return `

## QUESTIONS
For additional questions, please get in touch:
https://github.com/${response.github}
${response.email}
`
            } else if (response.github) {
                return ` 

## QUESTIONS
For additional questions, please get in touch:
https://github.com/${response.github}
`
            } else if (response.email) {
                return `
                
## QUESTIONS
For additional questions, please get in touch:
${response.email}
`
            } else if (!response.github && !response.email) {
                return ``
            }
        }

        const license = () => {
        if (response.license === 'MIT') {
            return `

## LICENSE
MIT License

Copyright (c) 2021 ${response.github}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`
    } else if (response.license === "Apache") {
       return `
## LICENSE
Copyright 2021 ${response.github}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`
    } else if (response.license === "None") {
        return ``
    }
}
       
      let total = badge + title + installation() + usage() + contributing() + testing() + questions() + license()

        fs.writeFile('./assets/README.md', total, (e) => {
            e ? console.error(e) : console.log('success')
        })
  })  
//        ## LICENSE


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
    