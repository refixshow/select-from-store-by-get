import React, { FC, useContext } from "react"

import { todosContext } from "../contexts/todosContext"
import { Link } from "react-router-dom"

const ItemsListView: FC = () => {
  const { todos } = useContext(todosContext)

  return (
    <div className="items__content">
      {todos.length > 0
        ? todos.map((todo) => (
            <div
              className={`items__item ${
                todo.completed && "items__item--completed"
              }`}
              key={todo.id}
            >
              <h2>{todo.title}</h2>
              <Link className="items__link" to={`/items/${todo.id}`}>
                see datails
              </Link>
            </div>
          ))
        : "fetching todos..."}
    </div>
  )
}

export default ItemsListView
