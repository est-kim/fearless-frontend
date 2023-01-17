import { NavLink } from "react-router-dom";

function Nav() {
    let activeStyle = {
        fontWeight: "bold",
    }
    let activeClassName = "bold"
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" href="#">Conference GO!</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink id="location-toggle" className="nav-link" aria-current="page" href="new-location.html">New location</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink id="conference-toggle" className="nav-link" aria-current="page" href="new-conference.html">New conference</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" href="new-presentation.html">New presentation</NavLink>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search conferences" aria-label="Search"></input>
                    <button className="btn btn-outline-success me-2" type="submit">Search</button>
                    <NavLink className="btn btn-primary" href="attend-conference.html">Attend!</NavLink>
                </form>
            </div>
        </div>
    </nav>
    );
}

  export default Nav;
