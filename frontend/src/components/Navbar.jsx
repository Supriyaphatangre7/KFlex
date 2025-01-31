import { FaUserCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export const Navbar = () => {
  const dropdown=()=>{
    <ul>
      <li>profile</li>
    </ul>
  }

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
                <a className="nav-link active text-white" aria-current="page" href="/">Home</a>
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

              <li className="nav-item">
              <button
                className="btn btn-ghost btn-circle dropdown-toggle mt-1"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ marginRight: "30px" }}>
                <FaSearch  style={{ fontSize: "20px",color:"white" }} />
              </button>
              </li>

              <li className="nav-item">
                <a href="/login"><button className="btn btn-outline-success" type="submit" style={{ marginLeft: "1100px" }}>Login</button></a>
              </li>
            </ul>
    
            

            </div>
          </div>
    
      </nav>
    </>
  );
};
