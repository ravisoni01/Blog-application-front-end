import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailsPost from './components/posts/DetailsPost';
import { Box } from '@material-ui/core'
import CreatePost from './components/posts/CreatePost';
import UpdatePost from './components/posts/UpdatePost';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Box style={{ marginTop: 65 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={DetailsPost} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/update/:id" component={UpdatePost} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
