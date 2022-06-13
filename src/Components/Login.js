import { React, useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Powershel from "./Video/Powershel.mp4";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Nav";
import { NULL } from "mysql/lib/protocol/constants/types";
import { useIsRTL } from "react-bootstrap/esm/ThemeProvider";

const LoginPage = () => {
  const navigate = useNavigate();

  const [validLoginEmail, setvalidLoginEmail] = useState(false);
  const emailHandlerLogin = () => {
    if (!inputemail.includes("@")) {
      toast.error("Enter Correct Email");
    } else setvalidLoginEmail(true);
  };

  const [inputemail, setinputemail] = useState("");
  const [inputpassword, setinputpassword] = useState("");

  // const userEmail = localStorage.getItem("email")
  //   ? localStorage.getItem("email")
  //   : "user@user.com";

  const handlerSubmit = (event) => {
    event.preventDefault();

    if (inputemail === "" || inputpassword === "") {
      alert("fill the all fields");
    }

    const userData = localStorage.getItem("Users");
    let data = JSON.parse(userData);

    const foundObject = data.find((e) => e.email === inputemail);

    if (foundObject === NULL) {
      alert("Enter Email");
    }

    if (foundObject.password === inputpassword) {
      toast.success("Log in Successfull..✔ Please wait !", {
        position: "top-center",
      });
      setTimeout(() => {
        navigate("/fromto", { replace: true });
      }, 3000);
    } else {
      toast.error("Log in failed ❌", { position: "top-center" });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="loginheading">Log in</div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
          filter: "brightness(40%)",
        }}
      >
        <source src={Powershel} type="video/mp4"></source>
      </video>
      <Container className="login-whole">
        <Form className=" mini-login-whole">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="logininput"
              type="email"
              value={inputemail}
              onChange={(e) => setinputemail(e.target.value)}
              onBlur={emailHandlerLogin}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="logininput"
              type="password"
              value={inputpassword}
              onChange={(e) => setinputpassword(e.target.value)}
              placeholder="Password"
            />
          </Form.Group>
          <Button
            variant="success"
            // onClick={submitHandler}
            onClick={handlerSubmit}
          >
            Log in
          </Button>
        </Form>
        <ToastContainer hideProgressBar />
      </Container>
    </div>
  );
};
export default LoginPage;
