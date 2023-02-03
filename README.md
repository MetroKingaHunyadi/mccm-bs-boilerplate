# eSolutions Starter Project

This is a starter project created by eSolutions team.
It is a custom CRA project built from the ground up for learning purposes and can be used as a starting template for
future projects.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run server`

`npm install -g json-server`

Runs the json mock service on port 3001. The full command being run from the package file is:

`json-server --watch db.json -p 3001 -d 300`

This command translates into the json-server monitoring any file changes on the `db.json` file and even running with a
debounce of 300ms to simulate
an actual request more accurately.

Any and all json entries configured in the `db.json` file will generate new endpoints which are also fully REST-ful.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
