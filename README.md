This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You should:
1. write in the console:
-> npm install -g create-react-app
-> npm install --save-dev mocha
2. open your app and write in the console:
-> npm start
3. run test in App.test.js:
(start framework for test -> JEST in --watch mode ):
-> npm run test (or npm t)
--------------------------------------------------------------------------------
framweork for test: JEST:
q / Ctrl + C - leaving the watch mode
p - selection of files with tests to be launched
t - running tests with a specific name
c / a - deleting the current filter (running all available tests)
Enter - start currently selected tests
--------------------------------------------------------------------------------
4. Install library ENZYME (testing of the reactor components)
-> npm install --save-dev enzyme enzyme-adapter-react-16 react-test-renderer
5. Create file scr/setupTests.js with:
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
--------------------------------------------------------------------------------
4. if you show your app in webside, you write in the console:
-> npm run start (or npm start).
--------------------------------------------------------------------------------
WATCHING!
if you create app without create-app-React, you should:
1. use plugin babel-plugin-transform-class-properties and install it:
-> npm install --save-dev babel-plugin-transform-class-properties
(http://babeljs.io/docs/en/babel-plugin-transform-class-properties/)
2. use plugin babel-plugin-transform-object-rest-spread and install it:
-> npm install --save-dev babel-plugin-transform-object-rest-spread
(https://babeljs.io/docs/en/babel-plugin-transform-object-rest-spread/)
-------------------------------------------------------------------------------
isntal library uuid:
(https://www.npmjs.com/package/uuid)
-> npm install uuid
-> import uuid from 'uuid';
-> use: id: uuid.v4() (for example)
