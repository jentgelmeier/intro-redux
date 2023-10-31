import { createStore, compose, applyMiddleware, bindActionCreators} from "redux";

const initialState = {
  users: [
    { id: 1, name: "Steve" },
    { id: 2, name: "Eric" },

  ],
  tasks: [
    { title: "File the TPS reports" },
    { title: "order more energy drinks" },
  ]
};

const ADD_TASK = "ADD_TASK"
const ADD_USER = "ADD_USER"

const addTask = (title) => ({ type: ADD_TASK, payload: title })
const addUser = (name) => ({ type: ADD_USER, payload: name })

const userReducer = (users = initialState.users, action) => {
  if (action.type === ADD_USER) {
    return [...users, action.payload]
  }

  return users
}

const taskReducer = (tasks = initialState.tasks, action) => {
  if (action.type === ADD_TASK) {
    return [...tasks, action.payload]
  }

  return tasks
}

const reducer = combineReducers({ users: userReducer, tasks: taskReducer })

//we want to split this reducer into smaller reducers because too big
// const reducer = (state = initialState, action) => {
//   if (action.type === ADD_USER) {
//     return {
//       ...state,
//       users: [...state.users, action.payload]
//     }
//   }

//   if (action.type === ADD_TASK) {
//     return {
//       ...state,
//       title: [...state.tasks, action.payload]
//     }
//   }
// }

const store = createStore(reducer, initialState)