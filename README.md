# angular-adonis-book-app

Frontend - Angular
Backend - Adonis 
Database used mySQL(remotemysql.com and phpmyadmin gui)

Use Postman application to send http request to your localhost

here is a readme on how this small project works so that i dont forget how to build it as well

# setting up backend (Adonisjs)

*** highly recommend reading the docs on adonisjs website https://adonisjs.com/ and some youtube tutorials to understand the flow
DO NOT just clone and read the files like you built it. It doesnt work that way. Just copying blindly does not work too.
 
1) install adonis cli 
npm i -g @adonisjs/cli
2) create new application using adonis cli (make it api only for our purposes) {if use fullstack, have to disable some middleware}, 
adonis new app-name --api-only
3) adonis serve --dev to run
4) make your migration, controller, model files with this sick command
adonis make:model ControllerName --migration --controller

Adonis follows the MVC(Model, View and Controller) pattern to process the data. 


Model -> this is the file that calls the database , *Important, remember to import at the top of every Controller file 
read more at https://adonisjs.com/docs/4.1/lucid

Controller -> This is the file that manipulates manipulates the data from the database to be packaged nicely to send to the frontend

View -> we will be using angular to display all the data

5) Set up the routes in the routes folder (start -> routes)





# setting up frontend (Angular) TODO


