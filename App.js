import logo from "./logo.svg";
import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import Addcourse from "./components/Addcourse";
import Header from "./components/Header";
import Menue from "./components/Menue";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes

function App() {
  const btnHandle = () => {
    toast.success("ok done", {
      position: "top-center",
    });
  };

  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          {/* call header component */}
          <Header />
          <Row>
            {/* md stands for medium screen size */}
            <Col md={4}>
              <Menue />
            </Col>
            <Col md={8}>
              {/* Wrap your Routes and use Route inside Routes */}
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<Addcourse />} />
                <Route path="/view-course" element={<AllCourses />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
