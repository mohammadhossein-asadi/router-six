import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Blog = () => <h1>Blog</h1>;

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
