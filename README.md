# ITECH3018 Assignment 1

Table of Content

1. [Required Software](#required-softwares)
2. [Setup](#setup)
3. [Personal Reflection](#personal-reflection)
4. [Statement of Assistance](#statement-of-assistance)
5. [Statement of Completion](#statement-of-completion)
6. [Notes](#notes)
7. [References](#references)

## Required Softwares

- [Nodejs](https://nodejs.org/en/) >= 14.18.1
- [Deno](https://deno.land/) >= 1.16.3
- [file_server](https://deno.land/manual@v1.13.2/examples/file_server)
- [chat_server](https://cdn.jsdelivr.net/gh/ITECH3108FedUni/assignment_api/chat_server.js)

## Setup

Install project `dependency` using `npm install` then `npm start` to run `file_server` on port 8000 and `chat_server` on port 7777.

This project uses [`concurrently`](https://www.npmjs.com/package/concurrently) package as a `devDependency` to streamline the development environment.

## Personal Reflection

## Statement of Assistance

- Most of the help was provided by developer group from Flex Dapps discord channel where they helped me with flex-box, css tricks and how routing works.
- Other resources used are listed in the [References](#references) section

## Statement of Completion

| Implementation                                              | Status |
| ----------------------------------------------------------- | ------ |
| Login screen allows user to type username                   | ✅     |
| Login screen validates username                             | ✅     |
| Topics list displays list of topics                         | ✅     |
| New topics can be created successfully                      | ✅     |
| Topic items can be selected to show posts                   | ✅     |
| Post listing includes both text and display name            | ✅     |
| New posts can be added to a topic                           | ✅     |
| Users can delete their own topics                           | ✅     |
| The page automatically loads new data                       | ✅     |
| Challenge task (optional). Navigation using the History API | ✅     |

## Notes

- To view markdown file please visit the github repository [here](https://github.com/ravi0the0sun/ITECH3108_Assignment1_3034283)
- For the option task I unintentionally ended up creating unique addresses for each topic as the link passes id as a URL parameter instead of using History API

## References
