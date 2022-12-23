# Mini Project : Every Project

This code is intended to clone a Netflix site.
The developer is a team of hanghae-99 for clone-project for frontend and backend collaboration.

# Specification

A compliant README must satisfy all the requirements listed below.

- Note: Standard Readme is designed for open source libraries.
  Also, it was produced based on the library in December 2022.
  If you need information about the library, you can find it in package.json among the included files.

# Modeling / API statement / Wire-Frame

1. Modeling (ERD)
   You can check the modeling by accessing the address below and using an tables. This part was written in the backend.

   https://drawsql.app/teams/dy-1/diagrams/clone

2. API Statement
   You can check the API statement by accessing the address below and using an tables. This part was written in the backend and frontend.

   https://www.notion.so/SA-5-b916542520614e8888b0a8bf50ef7cba

3. Wire-Frame
   You can check the wire-frame by accessing the address below and using an images. This part was written in the frontend.

   https://www.figma.com/file/WRACmQeS4ikXCWuV75Ce6G/10%EA%B8%B0-E%EB%B0%98-5%EC%A1%B0[…]%EB%A1%A0%EC%BD%94%EB%94%A9?node-id=0%3A1&t=PF1IixsSucWk0P0i-0

# Table of Contents

The table in the content is shown in the list below.

- Note: This is only a navigation guide for the specification,
  and does not define or mandate terms for any specification-compliant documents.

1. Section
   Main page : The entire list of movies is listed and can be checked by dividing it into viewing grades/genres.
   Login Page : you can choose the login method for normal or social
   sign-up page : You can sign up.
   My Page : Available after login and displays profile of brief descriptions.

2. Additional Features
   view - You can check the list of movies that many people liked.
   pick - You can pick specific movies and then check them in a list.

# Process for Start

1.  Verify that the 'config' folder and the 'config.js' file exist.
    Then, create the '.env' file and fill out the contents below.

    DB_USER='Enter the user's ID of your DB.'
    DB_PASSWORD='Enter the user's password of your DB.'
    DB_NAME=hanghae_mini_project
    DB_END_POINT='Enter the end point of your DB.'
    DB_PORT=3306
    EXPRESS_PORT=3000
    SECRET_KEY=hanghae_mini_project_secret_key
    COOKIE_NAME=HangHae99
    PW_KEY="sha256"  
    INCOD="base64"
    HASH=sha256
    DIGEST=base64

2.  If you don't have a DB created with the same name,
    process 1 can be omitted. If not, it must be implemented from number 1.
    please run the contents below in order at the terminal.
    This is the procedure for 1) database drop 2) create 3) migration.

    1. npx sequelize db:drop --config ./src/config/config.js
    2. npx sequelize db:create --config ./src/config/config.js
    3. npx sequelize db:migrate --config ./src/config/config.js --migrations-path ./src/migrations --models-path ./src/models

3.  install the npm package by entering the command in your terminal.
    ex. npm i

4.  Run the server by entering the command in your terminal.
    ex. npm run dev

# Questions / inquiries

You can get help from Google.
