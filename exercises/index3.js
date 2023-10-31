import { createStore, compose, applyMiddleware, bindActionCreators} from "redux";

const reducer = state => state

const monitorEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const monitoredReducer = (state, action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const diff = end - start
    console.log(diff)
    return newState
  }
  
  return createStore(monitoredReducer, initialState, enhancer)
}

//exercise
const logEnhancer = (createStore) => (reducer, initialState, enhancer) => {
  const logReducer = (state, action) => {
    console.log('old state', state)
    const newState = reducer(state, action)
    console.log('new state', newState, action)
    return newState
  }
  
  return createStore(logReducer, initialState, enhancer)
}

const logMiddleware = store => next => action => {
  console.log("old state", store.getState(), action);
  next(action)
  console.log("old state", store.getState(), action);
}

const performanceMiddleware = store => next => action => {
  const start = performance.now()
  next(action)
  const end = performance.now()
  const diff = end - start
  console.log(diff)
}

//1st input is reducer, 2nd (optional) is initial state, 3rd (optional) is enhancer function 
const store = createStore(reducer, applyMiddleware(logMiddleware, performanceMiddleware))

store.dispatch({type: 'Hello world'})

