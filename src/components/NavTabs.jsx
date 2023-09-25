import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="nav nav-tabs py-2">
      <button className="nav-item btn btn-outline-secondary me-2">
        <Link
          to="/"
          className= {currentPage === '/' ? 'nav-link active' : 'nav-link'} 
        >
          Home
        </Link>
      </button>
      <button className="nav-item btn btn-sm btn-outline-secondary me-2">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </button>
      <button className="nav-item btn btn-sm btn-outline-secondary me-2">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </button>
      <button className="nav-item btn btn-sm btn-outline-secondary me-2">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </button>
    </nav>
  );
}

export default NavTabs;
