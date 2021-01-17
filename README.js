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
const list = require('markdown-list');

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
        //response.license === "MIT" ? `![GitHub](https://img.shields.io/github/license/${response.github}/${response.repo})` : ``

        response.license === "MIT" ? `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)` : ``
        || response.license === "Apache" ? `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)` : ``

        //[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
        //const badge = `![GitHub](https://img.shields.io/github/license/${response.github}/${response.repo})`
 
        const title = `
# ${response.title}

${response.description}

## TABLE OF CONTENTS`

const table = () => {
    var render = ""
    for (i = 2; i < 7; i++) {
        if (Object.values(response)[i] !== "" && Object.values(response)[i] !== "None") {
            const key = "[" + Object.keys(response)[i].charAt(0).toUpperCase() + Object.keys(response)[i].slice(1) + "]"
                + "(#" + Object.keys(response)[i].toUpperCase() + ")"
            render += key + "\n"
       }
    }
    // city.charAt(0).toUpperCase() + city.slice(1)
    // .split(' ')
   

    // if (Object.values(response)[2] !== "") {
    //      render += Object.keys(response)[2] + " "
    // }
    // if (Object.values(response)[3] !== "") {
    //     render += Object.keys(response)[3]+ " "
        
    // }
    // if (Object.values(response)[4] !== "") {
    //     render += Object.keys(response)[4]+ " "
        
    // }
    // if (Object.values(response)[5] !== "") {
    //     render +=  Object.keys(response)[5]+ " "
    // }
    // if (Object.values(response)[6] !== "") {
    //     render += Object.keys(response)[6]+ " "
    // }
    return `
${render}`
// ${one}
// ${two}
// ${three}
// ${four}
// ${five}

    
}




//WHY DOESNT THIS WORK? IT SHOULD ITERATE THROUGH THE OBJECT.KEYS AND RUN THE PRINT FUNCTION FOR EACH VALUE OF I
//  const table = () => {
//     for (i = 2; i < 7; i++) {
//       const print = () => {         
// const keys = Object.keys(response)[i]
// console.log(keys)
//     return `
// ${keys}
// `
//       }

// print()
// }

//         }
    
    





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
## CONTRIBUTIONS <a name="CONSTRIBUTIONS"></a>

${response.contributing}
`
            } else if (!response.contributing) {

                return ``
                } 
        }
        const testing = () => {
            if (response.testing) {

                return          `
## TESTING <a name="TESTING"></a>

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
       
      let total = badge + title + table() + installation() + usage() + contributing() + testing() + questions() + license()

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




//ATTEMPTS AT MAKING A LOOP TO DYNAMICALLY generate THE TABLE OF CONTENT. I GIVE UP.
//     if (response.installation) {
// return `
// Installation`
// //     }

// const values = Object.values(response)
// // for (i = 2; i < 7; i++) {

// const table = () => {
// var array = []
// for (i = 2; i < 7; i++) {
//     const keys = `${(Object.keys(response)[i])}`
    
//     array.push(keys)
//     console.log(keys)
// }
// //array.values().classList.add()
// // console.log(array)

// // for (const value of array) {
// //           console.log(`${value}`)
// // }
// const print = `${array.values()}`
// return `${print}`
// }
// return
// `
// \n 
// *${array} \n-
// `



// for (const value of keys) {
//     console.log(value)

//}

// 
// console.log(values)
// console.log(keys)
// values.forEach(table = () => {
//     if (values) {
//         //function ListContent(ListItems)
//         //ListContent(${keys})

          
    
//})










    