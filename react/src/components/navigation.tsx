import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <Navbar bg="light" fixed="bottom">
      <Nav className="d-flex justify-content-between">
        <Nav.Link>홈</Nav.Link>
        <Nav.Link>일지</Nav.Link>
        <Nav.Link>커뮤니티</Nav.Link>
        <Nav.Link>타이틀</Nav.Link>
        <Nav.Link>설정</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;