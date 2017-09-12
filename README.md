# fed-reactjs-mastering-redux
- OS: Linux Ubuntu

## App Deployed in Heroku
app: https://app-react-redux-recipe-finder.herokuapp.com/

## Video of the App running
video: https://www.youtube.com/watch?v=Gm-m6DnWIeM&list=PLBaNeIDelX0I23h43D-TUsk16fjY0Bujc&index=2

## Setup Project
Package manager:
> sudo npm install -g yarn

App react:
> sudo npm install -g create-react-app

Create new app:
> create-react-app supersquad

Start the app:
> cd supersquad; yarn start

## Deploy in Heroku
Login:
> heroku login

Create new project:
> heroku create

Change default domain:
> heroku apps:rename app-react-redux-supersquad

Check for the remote branchs
> git remote -v

Check logs 
> heroku logs

Deploy code (when I am still in my branch):
> git push origin HEAD:master
> yarn install
> git push heroku master


