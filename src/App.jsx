import { Container } from "react-bootstrap";
import Navebar from "./components/Navebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Navebar />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

export default App;
