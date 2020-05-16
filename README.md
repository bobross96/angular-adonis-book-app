# angular-adonis-book-app

Frontend - Angular
Backend - Adonis 
Database used mySQL(remotemysql.com and phpmyadmin gui)

Use Postman application to send http request to your localhost

here is a readme on how this small project works so that i dont forget how to build it as well

# setting up backend (Adonisjs)

*** highly recommend reading the docs on adonisjs website https://adonisjs.com/ and some youtube tutorials to understand the flow
DO NOT just clone and read the files like you built it. It doesnt work that way. Just copying blindly does not work too. I tried and really got stuck. 
 
1) install adonis cli 
npm i -g @adonisjs/cli
2) create new application using adonis cli (make it api only for our purposes) {if use fullstack, have to disable some middleware}, 
adonis new app-name --api-only
3) adonis serve --dev to run
4) make your migration, controller, model files with this sick command
adonis make:model modelName --migration --controller (might as well do this one shot at the start, easier to adjust)
5) your app will then have a model and migration file (for database) , and controller to run functions with database elements

Adonis follows the MVC(Model, View and Controller) pattern to process the data. 


Model -> this is the file that calls the database , *Important, remember to import at the top of every Controller file 
read more at https://adonisjs.com/docs/4.1/lucid

Controller -> This is the file that manipulates manipulates the data from the database to be packaged nicely to send to the frontend

View -> we will be using angular to display all the data

5) Set up the routes in the routes folder (start -> routes)


# setting up Puppeteer (web scraper lib for nodejs)
https://github.com/puppeteer/puppeteer 
*** i added this to retrieve image url + isbn for books , and also just to dabble in web scraping. 

good to just read some of the documentation, very easy setup ( i just added inside BookController for easy sake should be imported elsewhere)

*Some good tip, to get the selector value, inspect the element you want, right click and select copy and copy selector, to paste onto the selector part in puppeteer. for example , the selector can sometimes be unwieldy like 
body > div.page-slide > div.content-wrap > div.main-content.search-page > div.content-block > div > div > div > div > div:nth-child(1) > meta:nth-child(2)
so just take the last one if what youre lookin for is the first one, eg 
document.querySelector('meta:nth-child(2)') will do the job haha (im a noob this is cool shit to me)
and u can also append getAttribute() if its not in object form

# setting up frontend (Angular) TODO


