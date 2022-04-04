import { Search } from '../search/index';
import { Provider } from "react-redux";
import store from "../../data/store";

const Home = () => {
    return (
        <Provider store={store}>
            <div className="container">
                <Search />
            </div>
        </Provider>
    )
}

export default Home;



