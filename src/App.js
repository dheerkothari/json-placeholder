import "./App.css";
import Posts from "./pages/posts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostDetails from "./pages/post-details";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route path="/posts" exact>
            <Posts />
          </Route>
          <Route path="/posts/:postId" exact>
            <PostDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
