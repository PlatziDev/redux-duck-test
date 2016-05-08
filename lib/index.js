export function testType({ actionName, duckName, moduleName = false, expected }) {
  const type = moduleName
    ? `${moduleName}/${duckName}/${actionName}`
    : `${duckName}/${actionName}`;

  return expected === type;
}

export function testAction({ actionCreator, payload, expected }) {
  return JSON.stringify(actionCreator(payload)) === JSON.stringify(expected);
}

export function testReducer({ reducer, state, action, expected }) {
  return JSON.stringify(reducer(state, action)) === JSON.stringify(expected);
}
