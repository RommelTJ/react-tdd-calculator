# React Test-Driven Calculator

A calculator built using Test-Driven Development.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## What is Test-Driven Development?

Test-Driven Development (`TDD`) is a development method that utilizes repetition of a short development cycle called 
`Red-Green-Refactor`.

### Process

1. Add a test
2. Run all tests and see if the new test fails (red)
3. Write the code to pass the test (green)
4. Run all tests
5. Refactor
6. Repeat

#### Pros

* Design before implementation
* Helps prevent future regressions and bugs
* Increases confidence that the code works as expected

#### Cons

* Takes longer to develop (but it can save time in the long run)
* Testing edge cases is hard
* Mocking, faking, and stubbing are all even harder

## Types of Tests

* Shallow Rendering Tests
  * Useful to keep yourself constrained to testing the component as a unit 
  * Avoids indirectly testing the behavior of child components
  * https://enzymejs.github.io/enzyme/docs/api/shallow.html
* Mount Tests
  * These do a full DOM render.
  * Allow us to get the text values of child elements.
  * As a rule, always use shallow tests first.
    * Use mount when you want to test either
      * `componentDidMount` or `componentDidUpdate`
      * DOM rendering, component lifecycle, and the behavior of child components
* Snapshot Testing
  * Although snapshots are not part of TDD as they are written after a component has been written 
  * Think "green-green-refactor" instead of "red-green-refactor"
  * They are worth including since they will quickly alert you of any unexpected changes to a rendered component. 
  * It's best to add them after you've finished the writing of the component.
  * You'll need to use a snapshot serializer for Jest version 24 or greater.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
