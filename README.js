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
            name: 'contributions',
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
        const badge = 
        response.license === "MIT" ? `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)` : ``
        || response.license === "Apache" ? `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)` : ``
 
        const title = `
# ${response.title} ${badge}

## DESCRIPTION

${response.description}

## TABLE OF CONTENTS`

    const table = () => {
        var render = ""
        for (i = 2; i < 7; i++) {
            if (Object.values(response)[i] !== "" && Object.values(response)[i] !== "None") {
                const key = "[" + Object.keys(response)[i].charAt(0).toUpperCase() + Object.keys(response)[i].slice(1) + "]"
                    + "(#" + Object.keys(response)[i].toUpperCase() + ")"
                render += "\n" + key + "  "
        }
        }
        return `
    ${render}`    
    }

    const installation = () => {
        if (response.installation) {
            return `

## INSTALLATION <a name="INSTALLATION"></a>

${response.installation}
`
            
        } else if (response.installation === "") {
            return ``
        }
    }

    const usage = () => {
        if (response.usage) {
            return ` 
## USAGE <a name="USAGE"></a>

${response.usage}
`
        } else if (response.usage === "") {
             return ``   
        } 
    }

    const contributing = () => {
        if (response.contributing) {
            return ` 
## CONTRIBUTIONS <a name="CONTRIBUTIONS"></a>

${response.contributions}
`
        } else if (!response.contributions) {

            return ``
        } 
    }

    const testing = () => {
        if (response.testing) {
            return          `
## TESTING <a name="TESTING"></a>

${response.testing}
`
        } else if (response.testing === '') {        
            return ``       
        }
    }

    const questions = () => {
        if (response.github && response.email) {
            return `
## QUESTIONS <a name="QUESTIONS"></a>
For additional questions, please get in touch:  
https://github.com/${response.github}  
${response.email}
`
        } else if (response.github) {
            return ` 
## QUESTIONS <a name="QUESTIONS"></a>
For additional questions, please get in touch:  
https://github.com/${response.github}  
`
        } else if (response.email) {
            return `       
## QUESTIONS <a name="QUESTIONS"></a>
For additional questions, please get in touch:\
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
       
    let total = title + table() + installation() + usage() + contributing() + testing() + questions() + license()

    fs.writeFile('./assets/README.md', total, (e) => {
        e ? console.error(e) : console.log('success')
    })
  })  









    