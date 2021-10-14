import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Quiz from './quiz/QuizLoad'

function App() {
  return (
    <div>
      <Router>
        <div style={{ minHeight: '78.1vh' }}>
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Quiz} />
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;
