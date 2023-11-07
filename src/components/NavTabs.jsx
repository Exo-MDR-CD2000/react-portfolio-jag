import { Link, useLocation } from "react-router-dom";


function NavTabs() {
    const currentPage = useLocation().pathname;

    return (
        <div className="navContainer">
            <h1 className="initials">JAG</h1>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
                        Home
                        </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className={currentPage === "/about" ? "nav-link active" : "nav-link"}>
                        About
                        </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={currentPage === "/contact" ? "nav-link active" : "nav-link"}>
                        Contact
                        </Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume" className={currentPage === "/resume" ? "nav-link active" : "nav-link"}>
                        Resume
                        </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavTabs;