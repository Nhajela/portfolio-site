
import './App.css';
import Home from './pages/home/home.component.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import About from "./pages/about/about.component.jsx";
import Footer from "./components/footer/footer.component.jsx";
function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
<About />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
