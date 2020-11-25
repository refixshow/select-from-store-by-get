import { FC } from "react"
import { Link } from "react-router-dom"

const HomePage: FC = () => {
  return (
    <div className="page">
      <div className="hello">
        <h1>Best ToDoApp ever existed!</h1>
        <Link to="/items/">start!</Link>
      </div>
    </div>
  )
}

export default HomePage
