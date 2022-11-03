# Shailendra Angular Library

This library is a collection of Angular custom components, directives, and pipes. It is based on Angular latest version 14.2.

### How to use this library

- Install the latest version of `shailendra-angular-library` npm package by `npm install shailendra-angular-library`.

- Import `ShailendraAngularLibraryModule` in your `app.module.ts` file (You may also need to import `CUSTOM_ELEMENTS_SCHEMA` in module and component file)

- This library has a custom component. We can include component markup in the template file by using the component tag `<cat-facts></cat-facts>`

- This library has an attribute directive. It takes two parameters radius and the background color. We can use this directive by this sample snippet `<div [libRoundBlock]="'30px'" [bgColor]="'blue'"></div>`

- This library has a custom pipe that takes multiple parameters. We can use this pipe by this sample snippet `<p>{{ "First" | fullname : "Second" : "N…" }}</p>`

### Local Development

- Clone the repository from Github by `git clone https://github.com/shailendra4chat/ng-library.git`

- Run command `npm install`.

- Run command `ng serve -o` and the app will be running on `http://localhost:4200`

- The main applicaiton is developed to test the library components, directives and pipes (In the src folder, there will be main module and component)

- In the `projects` folder there will be a library folder `shailendra-angular-library`. Use this folder for creating more components, directives and pipes.

- Generate component, directive or pipe by using this command `ng g s components/compname --project=shailendra-angular-library`

- Created component, directive, pipe or services must be exported in the `public-api.ts` file

- If you make any change, you need to build the library by command `ng build shailendra-angular-library`

### Publish to NPM

- Build the library by above command

- Login to NPM by `npm login`

- To publish the library to npm, nagivate to the dist > library folder `cd dist/shailendra-angular-library`

- Run `npm publish`

- It should be published to npm, you can check it here `https://www.npmjs.com/package/shailendra-angular-library`