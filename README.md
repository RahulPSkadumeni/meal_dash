# Food-Ordering-WebApp

# type of testing developers doing

1.Unit testing
2.Integration Testing
3.End to end testing (e2e testing)

unit testing -testing component in isolation.
consider header , only consider to test header component only, and is it render properly

Integration tasting:-testing integration of component
consider search: so many component collaborated to make this feature, test this multiple component talking to each other.we test this develope of action flow

end to end testing: test as soon as user land to the web site to the user leaves. We test all the flows.

# React Testing Library

npm install --save-dev @testing-library/react

. build on top of dom testing library
. provides a set of utilities for writing tests that assert against the DOM output of your components.
. It doesn't rely on any browser APIs or globals like jsdom or Enzyme.

# React Testing Library use # JEST

its known as delightful javascript testing library

npm install --save-dev jest

for babel use additional settings

install this

npm install --save-dev babel-jest @babel/core @babel/preset-env

create a babel.config.js

    module.exports = {
         presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
         };

if using parcel configure it for that

https://parceljs.org/languages/javascript/#babel
parcel by default have own babel configuration
but suppose if we use custom configuration or jest or eslint we can disable babel s configuration and use our configuration
create .parcelrc file and copy configuration to it

form now on babel.config.js will use as configuration and disable default babel transpilation

## Running Tests

To run tests, run the following command

```
  npm run test
```

## Jest configuration

Jest is configured in package.json under "scripts" section with key value pair

```
npx jest --init
```

```
settings

typescript no
environment jsdom
coverage report Yes
provider babel
clear mock calls Yes
```

Test cases should be in "{\* tests\*\*}" folder
![Alt text](image.png)

file name should be as eg:

Header.test.js/ts

Header.spec.js/ts

```
import { sum } from "../sum"; // importing function to test

test("Check sum of 2 positive nos description of testing", () => {

    // code to test
  expect(sum(2, 5)).toBe(7); // expecting  result to be 7 for input 2,5
});


```

## Testing contact component
