import { React, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Powerslap from "./Video/Powerslap.mp4";
import Navbar from "../Components/Nav";

// if 'x' not in localStorage:
//   create a new arr
// if 'x' in localStorage:
//   get the data from localStorage
//   add object to this array
//   replace 'x' value with this array(setItem)

let arr = [];
const RegisterForm = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [validemail, setvalidemail] = useState(false);

  const emailHandler = () => {
    if (!email.includes("@")) {
      toast.error("Invalid E-mail");
    } else {
      setvalidemail(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (name === "") {
      toast.error("name is required", { position: "top-center" });
    } else if (email === "") {
      toast.error("email is required", { position: "top-center" });
    } else if (password === "") {
      toast.error("password is required", { position: "top-center" });
    }

    const userArray = {
      name: name,
      password: password,
      email: email,
    };
    arr.push(userArray);

    if (validemail) {
      localStorage.setItem("Users", JSON.stringify(arr));
      console.log(arr);
      toast.success("Saved successfully", { position: "top-center" });
      setname("");
      setemail("");
      setpassword("");
    } else {
    }
  };

  return (
    <div className="whole">
      <Navbar />
      <div className="register">
        Register
        <br />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Here..
      </div>
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
          filter: "brightness(20%)",
        }}
      >
        <source src={Powerslap} type="video/mp4"></source>
      </video>
      <Container className="mini-whole">
        <Form className="frm">
          <Form.Group className="mb-3 w-50">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              className="frminput"
              type="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Email address:</Form.Label>
            <Form.Control
              className="frminput"
              type="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              onBlur={emailHandler}
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-50">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              className="frminput"
              type="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Enter Password "
            />
          </Form.Group>
          <Button
            type="submit"
            onClick={submitHandler}
            variant="success"
            className="mt-2"
          >
            <Link className="btn-clor" to="/register">
              Register
            </Link>
          </Button>
        </Form>
      </Container>
      <ToastContainer hideProgressBar />
    </div>
  );
};

export default RegisterForm;
