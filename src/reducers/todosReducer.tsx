import { InitialState } from "../contexts/todosContext"

export interface Action {
  type: string
  payload: InitialState
}

export const actions = { FILL_TODOS: "FILL__TODOS" }

const todosReducer = (state: InitialState, action: Action) => {
  switch (action.type) {
    case actions.FILL_TODOS: {
      return [...action.payload]
    }
    default:
      return state
  }
}

export default todosReducer
