import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.logo}>My Company</h2>
      <ul style={styles.navLinks}>
        <li><Link to="/" style={styles.link}>Home</Link></li>
        <li><Link to="/about" style={styles.link}>About</Link></li>
        <li><Link to="/services" style={styles.link}>Services</Link></li>
        <li><Link to="/contact" style={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "white"
  },
  logo: {
    margin: "0",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    padding: "0",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  }
};

export default Navbar;
