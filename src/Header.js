import {Link} from "react-router-dom"
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

const Header = () => {
  return (
    <>
    
      <h1>
        Header
      </h1>
    
    <Nav>
      <Link to="nav">click to view our page</Link>
    </Nav>
    <Home>
      <Link to="home">home</Link>
    </Home>
    <Footer>
      <Link to="footer">footer</Link>
    </Footer>
</>
    

  )
}

export default Header