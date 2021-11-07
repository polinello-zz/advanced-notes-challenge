# Code Challenge "Advanced Notes"

I realized this project in order to pass a Company selection code challenge.

### Functionalities

- A. The application should display “other people” notes in the element from a static JSON that you’ll define
- B. The final user will be able to write text notes and publish it in the notes message list
- C. Each note must have the photo of the author, her/his name-surname and the publishing date and time
- D. If a note is greater than three rows trim the rest of the content and show a “Read More” CTA that
  expands the note message with the whole text.
- E. All notes should be sorted by publishing date (newest at bottom)
- F. Store the messages you’ve published inside Browser LocalStorage and keep them in the notes message
  list as long as user doesn’t delete browser cache (e.g. if I write: “Hello!”, it should be displayed also if I
  refresh the page)
- G. Make it responsive: min-width: 375px, max-width 1200px;
- H. Add a “filter” functionality to show only messages from selected “people”

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
