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

- At first it was quite difficult to resolve the CORS error I was encountering, but it turns out it was the Brave browser and its default settings `Block insecure private network requests` which ended up causing delays.
- Then I had some problems involving flex box layout and CSS but was able to solve it with the help of my peers.
- I have tested this app on Chrome, Brave, Mozilla and Safari the UI is consistent through out except on Safari where `justify-content: end;` doesn't work as intended.
- Creating this app with vanilla-js was extremely tedious as we have to write repetitive codes to do something on the UI leading me to prefer frameworks like Vue or React.
- Function where we fetch topics replies `checkTopic()` it also fetches the user list to assign the usernames with their names but I feel like this is not the proper way to do it or there is a better optimized way to do it.
- In Home dir I had to load `createNewTopic.js` as it was targeting elements which will be rendered after the HTML file is loaded so I used defer to run the functions after all of the elements are rendered.
- I used `localStorage` for cashing user info to keep the user logged in and also to save the new topics as well as replies when the window is reloaded.
- To find which topics to render I chose to pass `id` parameter where `id` is the same as the key `id` of a topic.
- The window will only reload if user is logged in and at the interval of 10 minutes on the home page or 10 seconds if the topics reply elements are mounted.

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

- (n.d.). MDN Web Docs. Retrieved 12 10, 2021, from https://developer.mozilla.org/en-US/
- (n.d.). W3Schools Online Web Tutorials. Retrieved 12 10, 2021, from https://www.w3schools.com/
- Chrome CORS error on request to localhost dev server from remote site. (2021, October 6). Stack Overflow. Retrieved 12 9, 2021, from https://stackoverflow.com/questions/66534759/chrome-cors-error-on-request-to-localhost-dev-server-from-remote-site
- Coyier, C. (2013, April 8). A Complete Guide to Flexbox | CSS-Tricks. CSS-Tricks. Retrieved 12 20, 2022, from https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- HTML File Paths. (n.d.). W3Schools. Retrieved 12 9, 2021, from https://www.w3schools.com/Html/html_filepaths.asp
