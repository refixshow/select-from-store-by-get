import React from "react"
import TodosContextProvider from "./contexts/todosContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { HomePage, ErrorPage, ItemsPage } from "./pages"

const App = () => {
  return (
    <TodosContextProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/items" component={ItemsPage} />
          <Route path="/items/:id" component={ItemsPage} />
          <Route path="/*" component={ErrorPage} />
        </Switch>
      </Router>
    </TodosContextProvider>
  )
}

export default App
