
function Navbar(props) {

  let currentPath = props.path;

  let homeClass = currentPath === '/' ? 'active' : '';
  let aboutClass = currentPath === '/about' ? 'active' : '';
  let contactClass = currentPath === '/contact' ? 'active' : '';

    return(
        <div id="navbar">
        <a href="/" id="logo" className="nav-link">Hobbies</a>
        <div id="navbar-right">
          <a className="nav-link active" href="/">Home</a>
          <a href="/about" className="nav-link" >About</a>
          <a href="/events" className="nav-link" >Events</a>
          <a href="/sign-in" className="nav-link" >Sign In</a>
          <a href="/register" className="nav-link" >Sign Up</a>
        </div>
      </div>
    )
}

export default Navbar;