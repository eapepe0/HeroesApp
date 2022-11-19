import { Link, NavLink, useNavigate } from "react-router-dom";




export const Navbar = () => {
    const navigate = useNavigate()
    const onLogout = () => {
        navigate('/login', { replace: true })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link className="navbar-brand" to="/">
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    <NavLink className={({ isActive }) => ` nav-item nav-link ${isActive ? 'active text-decoration-line-underline' : ''}`} to="marvel">
                        Marvel
                    </NavLink>

                    <NavLink className={({ isActive }) => ` nav-item nav-link ${isActive ? 'active text-decoration-line-underline' : ''}`} to="dc">
                        DC
                    </NavLink>
                    <NavLink className={({ isActive }) => ` nav-item nav-link ${isActive ? 'active text-decoration-line-underline' : ''}`} to="search">
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto mx-2">
                    <span className="nav-item nav-link text-primary">
                        Cristian
                    </span>
                    <button className="nav-item nav-link btn btn-outline-primary" onClick={onLogout}>Logout</button>
                    {/*  <NavLink className={({ isActive }) => ` nav-item nav-link ${isActive ? 'active' : ''}`} to="/login">
                        Logout
                    </NavLink> */}
                </ul>
            </div>
        </nav>
    );
};
