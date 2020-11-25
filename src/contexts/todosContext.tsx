import { createContext, useReducer, FC, useEffect, useCallback } from "react"
import todosReducer, { Action, actions } from "../reducers/todosReducer"
import axios from "axios"

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export type InitialState = Todo[]

export interface todosValue {
  todos: InitialState
  dispatch: React.Dispatch<Action>
}

export const initialState: InitialState = []

export const todosContext = createContext<todosValue>({
  todos: initialState,
  dispatch: () => {},
})

const TodosContextProvider: FC = ({ children }) => {
  const [todos, dispatch] = useReducer(todosReducer, initialState)

  const todosValue: todosValue = { todos, dispatch }

  const fetchTodos = useCallback(async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")

      dispatch({ type: actions.FILL_TODOS, payload: res.data })
    } catch (err) {
      console.error(err)
    }
  }, [])

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <todosContext.Provider value={todosValue}>{children}</todosContext.Provider>
  )
}

export default TodosContextProvider
