import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function Navebar() {
  const { product } = useSelector((state) => state.cart);
  const len = product.reduce((fn, sn) => {
    return (fn = fn + sn.quantiy);
  }, 0);
  console.log(len);
  return (
    <div>
      <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>App_Cart</Navbar.Brand>
          <div>
            <Navbar id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="product">
                  Products
                </Nav.Link>
                <Nav.Link as={NavLink} to="cart">
                  Cart _
                  <span
                    style={{
                      marginLeft: "10px",
                      color: "red",
                    }}
                  >
                    {len}
                  </span>
                </Nav.Link>
              </Nav>
            </Navbar>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navebar;
