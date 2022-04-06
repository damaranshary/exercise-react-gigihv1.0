import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Search from "../pages/search";
import Trending from "../pages/trending";
import Home from "../pages/home";
import Navbar from "../components/Navbar";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/trending">
                    <Trending />
                </Route>
                <Route path="/search">
                    <Search />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export { AppRouter };
