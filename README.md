# Redux Duck Test
Helper functions for testing redux ducks made with [redux-duck](https://github.com/sergiodxa/redux-duck/) library.

## Installation
```bash
npm i -D redux-duck-test
```

## API
### Test action type
```javascript
import { testType } from 'redux-duck-test';
import { ADD } from '../duck/messages';

const result = testType({
  expected: ADD,
  actionName: 'ADD',
  duckName: 'messages',
  moduleName: 'my-app',
});
```
- `testType` receive an object with the test specification.
- The `expected` key is your action type.
- The `actionName` key is the name of your action (eg. `ADD`).
- The `duckName` key is the name of your duck (eg. `messages`).
- The `moduleName` key is the name of your module (eg. `my-app`) (optional).

### Test action creator
```javascript
import { testAction } from 'redux-duck-test';
import { ADD, add } from '../duck/messages';

const result = testAction({
  actionCreator: add,
  payload: {
    id: 1,
    content: 'hello world!',
  },
  expected: {
    type: ADD,
    payload: {
      id: 1,
      content: 'hello world!',
    },
  },
});
```
- `testAction` receive an object with the test specification.
- The `actionCreator` key is the action creator function to test.
- The `payload` key is the payload to send to the action creator.
- The `expected` key is the expected action object.

### Test reducer
```javascript
import { testReducer } from 'redux-duck-test';
import { Map as map } from 'immutable';
import reducer, { add } from '../duck/messages';

const result = testReducer({
  reducer,
  state: map(),
  action: add({
    id: 1,
    content: 'hello world',
  }),
  expected: map({
    '1': {
      id: 1,
      content: 'hello world',
    },
  }),
});
```
- `testReducer` receive an object with the test specification.
- The `reducer` key is the reducer to test.
- The `state` key is the initial state passed to the reducer.
- The `action` key is the action to perform in the reducer.
- The `expected` key is the expected next state.
