# Automated Tests with Web application

![GitHub repo size](https://img.shields.io/github/repo-size/brunoglara/automated-tests-web?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/brunoglara/automated-tests-web?style=for-the-badge)

This project aims to conducting automated tests in a Curitiba City Hall web application called [Agenda Online](https://agendaonline.curitiba.pr.gov.br/). 
This application is for schedule appointments for services provided by city hall


   <img src="/screenshots/home_screen.png" alt="Home Screen" align="center"/><br>
 
   <img src="/screenshots/authenticated_screen.png" alt="Authenticated Screen" align="center"/><br>
   
   <img src="/screenshots/test_results.png" alt="Test Results" align="center"/><br>
   
 
 
## Technologies and tools used 🛠️:
<div>
 <a href="https://nodejs.org/en/">
  <img align="center" alt="NodeJS" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" />
 </a>
 <a href="https://www.npmjs.com/">
  <img align="center" alt="NPM" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
 </a>
 <a href="https://www.javascript.com/">
  <img align="center" alt="Javascript" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
 </a>
 <a href="https://codecept.io/">
  <img align="center" alt="CodeceptJS" height="50" width="60" src="https://www.svgrepo.com/show/330181/codeceptjs.svg" />
 </a>
 <a href="https://cucumber.io/" target="_blank">
  <img align="center" alt="Cucumber" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain-wordmark.svg" />
 </a>
 <a href="https://www.selenium.dev/documentation/webdriver/">
  <img align="center" alt="Selenium" height="50" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" />
 </a>

</div>

 <br/>
 <br/>
 
## Requirements
 * [Node](https://nodejs.org/en/) v18 installed
 * [NPM](https://www.npmjs.com/) v8
 * [Git](https://git-scm.com/)
 * [Google Chrome](https://www.google.com/chrome/)
 
 <br/>
 
## Running
* First step, you need to clone this repository. How to cloning a repository [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
* In the project's folder, execute:

 ```
 npm install
 ```
 
* In the project's folder, execute:

 ```
 npx codeceptjs run
 ```
 
 <br/>

## Tested scenarios

### First Scenario:  Do login
><b>Feature:</b> Authentication
>
><b>Given</b> the user previously registered in home page <br>
><b>When</b> enter the authentication data<br>
><b>Then</b> he is in the authenticated area<br>



### Second Scenario: Do log Out
><b>Feature:</b> Authentication
>
><b>Given</b> the user logged<br>
><b>When</b> he sign out<br>
><b>Then</b> he is in the home page<br>


### Third Scenario: Change profile data
><b>Feature:</b> Profile
>
><b>Given</b> the user logged<br>
><b>When</b> he change profile data<br>
><b>Then</b> the profile is updated<br>


