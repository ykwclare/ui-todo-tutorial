# ui-todo - Tutorial

Welcome to yet another tutorial on building your own TODO app! Here are what we will be going through in this tutorial. Please feel free to submit a PR if there is anything to be fixed, or if you have ideas on adding new challenges. Or if you want to help us style this app better, we would very much appreciate a PR too!

1. [Prerequisites](#1-prerequisites)
2. [Setting up](#2-setting-up)
3. [Frontend Development](#3-frontend-development)
4. [Backend Development](#4-backend-development)
5. [Testing](#5-testing)
6. [Deployment](#6-deployment)

## 1. Prerequisites

Make sure you have the following accounts:

- [Firebase](https://firebase.google.com/)
- [Github](https://github.com/)

Make sure you have the following installed in your computer:

- Git ([instructions here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))
- NPM ([instructions here](https://www.npmjs.com/get-npm))
- Your preferred IDE/editor (if not, you may try [VSCode](https://code.visualstudio.com/) out)

## 2. Setting up

1. Fork this repo
2. Clone your forked repo to your preferred directory in your computer
3. Open the repo in your IDE/editor

## 3. Frontend Development

Let's first make sure our setup was correct. Follow the steps below to run your app in development mode.

1. Install dependencies
   ```
   npm ci
   ```
2. Run app in development mode
   ```
   npm run start
   ```
   - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
   - The page will reload if you make edits.<br />
   - You will also see any lint errors in the console.

### Challenges

- Add delete functionality for each todo task
  - On click of the delete button, how can we update the context?
- (Advanced) Add update functionality for each todo task
  - How do we toggle between "update mode" (task is editable) and "read mode" (task is not editable)?
  - On click of "update" after editing the task, how can we update the context?
  - How can we prevent user from deleting a todo task while updating?

## 4. Backend Development

TODO:

## 5. Testing

TODO: blah blah some intro here

### Unit tests

```
npm run test
```

#### Challenges

- Write unit tests for the utility files that you just added for delete and update

### E2E tests

```
npm run start           # if you have not already done so
npm run cypress:open
```

An interactive window will appear. Click on the test you want to run.

#### Challenges

- Write e2e tests for the utility files that you just added for delete and update
- Clear all todo tasks before running the tests
- (Advanced) Create a test db for your tests so you won't interfere with production data

## 6. Deployment

TODO: blah blah do we need intro here if not can delete

### Github Pages

Github Pages is a static site hosting service that takes HTML, CSS and Javascript files from a repository on Github and publishes a website. Before we start, we have to fork the repository so that we can host the application on our site. After forking, click on the _Actions_ tab and enable workflows to run on the forked repositroy

The URL to your Github page should be: _https://\<your-github-username\>.github.io/ui-todo_

**Manual Deployment**

No configuration is required. Run the following and see your changes go live on your Github page

```
npm run deploy
```

**Automatic Deployment**

**Step 1**: Create a new personal access code to allow Github actions to deploy on our behalf

- Go to personal profile setting and on the left navbar, click on _Developer settings_
- Again on the left navbar, click on _Personal access tokens_
- On the top, click on _Generate new token_
- Under _Note_, fill it up with the purpose of the token (e.g. 'deploy-access') and under _Select scopes_, tick the checkbox _public_repo_ and finally click _Generate token_
- Save the access token somewhere

![create personl access token](assets/images/create-personal-access-token.png)

**Step 2**: Add access token to project’s environment variables

- Go to project setting and on the left navbar, click on _Secrets_
- On the top, click on _New secret_
- Under _Name_, enter ‘DEPLOY*ACCESS_TOKEN’ and under \_Value*, key in the access token you have saved earlier

![add personal access token as secret](assets/images/add-personal-access-token-as-secret.png)

**Step 3**: You are done! :tada: You can now commit and see your changes applied on your Github page
