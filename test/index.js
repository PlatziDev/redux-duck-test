import test from 'tape';
import { createDuck } from 'redux-duck';
import { Map as map } from 'immutable';

import {
  testType,
  testAction,
  testReducer,
} from '../build/index';

// duck to test
const duck = createDuck('tester', 'test');
const ADD = duck.defineType('ADD');
const add = duck.createAction(ADD);
const reducer = duck.createReducer({
  [ADD]: (state, action) => {
    return state.set(action.payload.id + '', map(action.payload));
  },
}, map());

test('type tester', t => {
  t.plan(1);

  t.ok(testType({
    actionName: 'ADD',
    duckName: 'tester',
    moduleName: 'test',
    expected: ADD,
  }), 'it should return the expected type');
});

test('action creator tester', t => {
  t.plan(1);

  t.ok(testAction({
    actionCreator: add,
    payload: {
      id: 1,
      message: 'hello world',
    },
    expected: {
      type: ADD,
      payload: {
        id: 1,
        message: 'hello world',
      },
    },
  }), 'it should return the expected action');
});

test('reducer tester', t => {
  t.plan(1);

  t.ok(testReducer({
    reducer,
    state: map(),
    action: add({ id: 1, message: 'hello world' }),
    expected: map({
      '1': {
        id: 1,
        message: 'hello world',
      },
    }),
  }), 'it should return the expected state');
});
