import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Search from "../pages/search";
import Trending from "../pages/trending";
import Home from "../pages/home";
import Navbar from "../components/Navbar";

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/trending" component={Trending} />
                <Route path="/search" component={Search} />
                <Route path="/" exact > <Redirect to="/home" /> </Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
