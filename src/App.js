import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoute from './routes/Public';
import HomePage from './pages/Home';
import UseReducerPage from './pages/hooks/UseReducer';
import configureStore from './store/ConfigureStore';
const { rootReducer, initialState } = configureStore

const App = () => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    // console.log(configureStore)
  }, [])

  return (
    <>
      <Router>
        <Switch>
          <PublicRoute path="/" component={ HomePage } value={{state, dispatch}} exact/>
          <PublicRoute path="/hooks/use-reducer" value={{state, dispatch}} component={ UseReducerPage }/>
        </Switch>
      </Router>
    </>
  )
}

export default App;