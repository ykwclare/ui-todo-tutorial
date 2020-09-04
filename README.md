# ui-todo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Development

### Install dependencies

```
yarn
```

### Run app in development mode

```
yarn start
```

- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- The page will reload if you make edits.<br />
- You will also see any lint errors in the console.

### Run unit tests

```
yarn test
```

### Run e2e tests

```
yarn start           # if you have not already done so
yarn cypress:open
```

An interactive window will appear. Click on the test you want to run.

## Deployment
test test
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
* Go to personal profile setting and on the left navbar, click on _Developer settings_
* Again on the left navbar, click on _Personal access tokens_
* On the top, click on _Generate new token_
* Under _Note_, fill it up with the purpose of the token (e.g. 'deploy-access') and under _Select scopes_, tick the checkbox _public_repo_ and finally click _Generate token_
* Save the access token somewhere

![create personl access token](assets/images/create-personal-access-token.png)

**Step 2**: Add access token to project’s environment variables
* Go to project setting and on the left navbar, click on _Secrets_
* On the top, click on _New secret_
* Under _Name_, enter ‘DEPLOY_ACCESS_TOKEN’ and under _Value_, key in the access token you have saved earlier

![add personal access token as secret](assets/images/add-personal-access-token-as-secret.png)

**Step 3**: You are done! :tada: You can now commit and see your changes applied on your Github page
