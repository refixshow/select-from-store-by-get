import { FC, useContext, useEffect, useState, useCallback } from "react"
import { Link } from "react-router-dom"
import { todosContext, Todo } from "../contexts/todosContext"

interface Props {
  id: number
}

const ItemDetailView: FC<Props> = ({ id }) => {
  const [matchingTodo, setMatchingTodo] = useState<Todo>()
  const { todos } = useContext(todosContext)

  const findAndSetMatchingTodo = useCallback(() => {
    if (todos.length <= 0) return

    const filteredTodo = todos.filter((todo) => todo.id === id)[0]

    if (filteredTodo) {
      setMatchingTodo(filteredTodo)
    }
  }, [todos, id])

  useEffect(() => {
    if (id !== -1) findAndSetMatchingTodo()
  }, [findAndSetMatchingTodo, id])

  return (
    <div className="items__content">
      {matchingTodo ? (
        <div
          className={`items__item ${
            matchingTodo.completed && "items__item--completed"
          }`}
        >
          <h3>{matchingTodo.title}</h3>
          <p>id: {matchingTodo.id}</p>
          <p>userId: {matchingTodo.userId}</p>
          <Link className="items__link" to="/items/">
            back
          </Link>
        </div>
      ) : (
        <div>Todo not found...</div>
      )}
    </div>
  )
}

export default ItemDetailView
