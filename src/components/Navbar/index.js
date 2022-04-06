import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Link to="/search">Search</Link>
            <Link to="/trending">Trending</Link>
        </>
    )
}

export default Navbar;