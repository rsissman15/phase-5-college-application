
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

## Setup

Start by **cloning** (not forking) the project template repository and removing
the remote:

```console
$ git clone git@github.com:learn-co-curriculum/project-template-react-rails-api.git your-project-name
$ cd your-project-name
$ git remote rm origin
```

Then, [create a new remote repository][create repo] on GitHub. Head to
[github.com](https://github.com) and click the **+** icon in the top-right
corner and follow the steps to create a new repository. **Important**: don't
check any of the options such as 'Add a README file', 'Add a .gitignore file',
etc — since you're importing an existing repository, creating any of those files
on GitHub will cause issues.

[create repo]: https://docs.github.com/en/github/importing-your-projects-to-github/importing-source-code-to-github/adding-an-existing-project-to-github-using-the-command-line#adding-a-project-to-github-without-github-cli

If you're working with a partner,
[add them as a collaborator][add collaborator] on GitHub. From your repo on
GitHub, go to Settings > Manage Access > Invite a collaborator and enter your
partner's username. Once your partner has access, they should git **clone** (not
fork) the repository.

[add collaborator]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository

Finally, connect the GitHub remote repository to your local repository and push
up your code:

```console
$ git remote add origin git@github.com:your-username/your-project-name.git
$ git push -u origin main
```


## How To Use

1. After you have cloned the repository, navigate into the client folder and install all dependencies from the frontend by running 
`$npm install`
2. Start the frontend server by running 
`$npm start` (on [http://localhost:4000])
3. Open a new terminal tab and install all dependencies from the backend server by running
`$ bundle install`
4. Run `rails db:create`, `rails db:migrate`, and `rails db:seed`
5. Start the backend server by running
 `$rails s`  (on [http://localhost:3000])


