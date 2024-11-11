import { Link } from 'react-router-dom';

function Navbar() {
    return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' ,display: 'flex', justifyContent: 'center', }}>
        <Link to="/" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none' , display: 'flex', justifyContent: 'center', }}>Home</Link>
        <Link to="/about" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none', display: 'flex', justifyContent: 'center',  }}>About</Link>
        <Link to="/services" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none', display: 'flex', justifyContent: 'center', }}>Services</Link>
        <Link to="/contact" style={{ margin: '0 15px', color: '#fff', textDecoration: 'none', display: 'flex', justifyContent: 'center',  }}>Contact</Link>
    </nav>
    );
}

export default Navbar;
