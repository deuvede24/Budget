# Budget

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Technologies Used

- **Angular 18.0.2**: Framework for building client-side applications in HTML and TypeScript.
- **Bootstrap**: CSS framework for responsive design and UI components.
- **RxJS**: Library for reactive programming using observables.
- **Karma**: Tool for executing unit tests.
- **Angular Forms**: For building and validating forms.

## Budget Application Summary

The Budget application allows users to create and manage quotes. Users can:

1. **Add Services**: Choose from SEO, Advertising, and Web Development services.
2. **Calculate Total**: Automatically calculate the total cost based on selected services.
3. **Submit Quotes**: Users can enter their contact information and submit quotes. The form prevents submission if fields are empty or incorrectly filled.
4. **View Quotes**: Submitted quotes are displayed in a list with sorting functionalities:
   - **Sort by Date**: Button to sort quotes by date.
   - **Sort by Price**: Button to sort quotes by total price.
   - **Sort by Name**: Button to sort quotes alphabetically by client name.

Tests are conducted to verify the accuracy of all calculations when selecting desired services, ensuring reliability and correctness in the final quotes.

These enhancements make it easier to find and organize quotes, enhancing the overall user experience.
