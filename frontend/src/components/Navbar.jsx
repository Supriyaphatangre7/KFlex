import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top" style={{ backgroundColor:"black"}}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" style={{ color: "green", fontSize: "45px" }}>KFLEX</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-1 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Series</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">New</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">Mylist</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="btn btn-outline-success" type="submit" style={{ marginRight: "20px" }}>Register</button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success" type="submit" style={{ marginRight: "10px" }}>Login</button>
              </li>
            </ul>

            {/* Profile Icon with Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="btn btn-ghost btn-circle dropdown-toggle"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginRight: "30px" }}
              >
                <FaUserCircle style={{ fontSize: "30px", color: "white" }} />
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
              >
                <li><a className="dropdown-item" href="#">Profile</a></li>
                <li><a className="dropdown-item" href="#">Settings</a></li>
                <li><a className="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};
