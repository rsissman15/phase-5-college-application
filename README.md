
# Phase 4 Project: College Organizer App

Keep track of your college applicayions! This is a project built for Flatiron school, showcasing skills aquired in building a Rails backend with a React frontend.

## Project Purepose

This application helps students stay organized when applying to colleges. The user signs into their account, can look through thousands of colleges, and can add their applications to their account. The user can also save files to their application.


## Features

- User can sign up for an account with a password
- User can log in and stay logged in on a page refresh
- User can log out
- Once logged in, user sees a list of colleges and can browse through them
- User can select college and add an application
- User can edit or delete application


## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm


See Environment Setup below for instructions on installing these tools if you
don't already have them.


## How To Use

1. After you have cloned the repository, navigate into the client folder and install all dependencies from the frontend by running 
`npm install`
2. Start the frontend server by running 
`npm start` (on [http://localhost:4000])
3. Open a new terminal tab and install all dependencies from the backend server by running
`bundle install`
4. Run `rails db:drop`,`rails db:create`, `rails db:migrate`, and `rails db:seed`
5. Start the backend server by running
 `rails s`  (on [http://localhost:3000])


