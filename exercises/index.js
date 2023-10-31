import { createStore, compose, applyMiddleware, bindActionCreators} from "redux";

const initialState = { value: 0 }

const INCREMENT = 'INCREMENT'
const ADD = 'ADD'

const incrementAction = { type: INCREMENT }

//action creators
const increment = () => ({ type: INCREMENT })
const add = (amount) => ({ type: ADD, payload: amount })


const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return { value: state.value + 1 }
  }

  if (action.type === ADD) {
    return { value: state.value + action.payload }
  }

  return state
}

const store = createStore(reducer)

const subscriber = () => console.log('SUBSCRIBER', store.getState())

//subscribe logs the state each time there is a dispatch
// store.subsribe(subscriber) 
//dispatch updates the state with whatever action is inputed into it
// store.dispatch(increment());

//first input is all the actions, the second input is what you are binding the actions to
const actions = bindActionCreators({ increment, add }, store.dispatch)
//the above is equivalent to
// const [dispatchIncrement, dispatchAdd] = [increment, add].map(fn => compose(store.dispatch, fn))

actions.increment()
actions.add(1000)

//need to log state to see how actions are changing state
console.log(store.getState())