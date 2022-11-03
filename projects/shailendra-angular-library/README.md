# Shailendra Angular Library

This library is a collection of Angular custom components, directives, and pipes. It is based on Angular latest version 14.2.

- Install the latest version of `shailendra-angular-library` npm package by `npm install shailendra-angular-library`.

- Import `ShailendraAngularLibraryModule` in your `app.module.ts` file (You may also need to import `CUSTOM_ELEMENTS_SCHEMA` in module and component file)

- This library has a custom component. We can include component markup in the template file by using the component tag `<cat-facts></cat-facts>`

- This library has an attribute directive. It takes two parameters radius and the background color. We can use this directive by this sample snippet `<div [libRoundBlock]="'30px'" [bgColor]="'blue'"></div>`

- This library has a custom pipe that takes multiple parameters. We can use this pipe by this sample snippet `<p>{{ "First" | fullname : "Second" : "N…" }}</p>`