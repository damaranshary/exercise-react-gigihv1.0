import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <ul>
            <li><Button variant="text"><Link to="/home">Home</Link></Button></li>
            <li><Button variant="text"><Link to="/trending">Trending</Link></Button></li>
            <li><Button variant="text"><Link to="/search">Search</Link></Button></li>
        </ul>
    )
}

export default Navbar;