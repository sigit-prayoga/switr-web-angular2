# Switr Frontend with Angular2

**[Switr](http://jlp.community/switr)** is a really simple web application that made for a demo of some recent technologies.
It's been dedicated to anyone, community or individual, who wants to share the particular tech.

**Frontend Tech Stack:**
* [AngularJS](https://github.com/sigit-prayoga/switr-web)
* [Angular 2.0](https://github.com/sigit-prayoga/switr-web-angular2)
* ReactJS
* Bootstrap
* Socket IO Client
* Ionic in iOS and Android (coming soon)

**Backend Tech Stack:**
* [NodeJS](https://github.com/sigit-prayoga/switr-backend)
* GO

**Database**
* MongoDB
* PostgreSQL (coming soon)

**This Repo:**
* Angular 2
* Firebase

[Angular 2](https://angular.io/) is a development platform for building mobile and desktop web applications.
[Firebase](https://firebase.google.com/) is a cloud services provider and backend. We use Firebase here to handle user auth, before save user profile to our database.

In case you wonder, we have 2 backend systems here. For anything related to user (login, profile, preferences), the backend is built with **GO** [fork me here](https://github.com/sigit-prayoga/switr-backend-go).
For the swit service itself, we use **NodeJS** [check 'em out](https://github.com/sigit-prayoga/switr-backend).

**NOTE:** This project is also available in AngularJS 1.5 [here](https://github.com/sigit-prayoga/switr-web)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
