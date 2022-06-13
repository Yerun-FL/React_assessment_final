import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./Modal.css";
import { ToastContainer, toast } from "react-toastify";

let busArray = [];
function ModalReady(props) {
  const [show, setShow] = useState(false);
  const [ticketval, setticketval] = useState(1);
  const [ticketValid, setticketValid] = useState("");

  const increment = () => {
    if (ticketval < 5) {
      setticketval(ticketval + 1);
    }
  };

  const decrement = () => {
    if (ticketval > 1) {
      setticketval(ticketval - 1);
    }
  };

  const handleClose = () => {
    props.close();
  };
  const handleShow = () => setShow(true);

  const [names, setnames] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [age, setage] = useState("");
  const [gender, setgender] = useState("");
  const [date, setdate] = useState("");

  const bookHandler = (e) => {
    e.preventDefault();
    console.log(props);
    const bookedData = {
      Bus_Number: props.serviceNumber.sno,
      pick_Name: props.serviceNumber.pname,
      drop_Name: props.serviceNumber.dname,
      p_price: props.serviceNumber.pprice,
      tickVal: ticketval,
      Name: names,
      Email: email,
      Number: number,
      Age: age,
      Gender: gender,
      Date: date,
    };

    if (names === "") {
      alert(" enter name");
    } else if (email === "" || !email.includes("@")) {
      alert("email is invalid");
    } else if (number > 9999999999 || number === "") {
      alert("enter valid number");
    } else if (age === "" || age > 80) {
      alert("enter valid age");
    } else if (gender === "") {
      alert("enter gender");
    } else if (date === "") {
      alert("enter date");
    } else {
      toast.success("Bus Tickets are Booked ", { position: "top-center" });

      busArray.push(bookedData);
      const busData = localStorage.setItem(
        "Booked-Person",
        JSON.stringify(busArray)
      );

      setnames("");
      setemail("");
      setnumber("");
      setage("");
      setgender("");
      setdate("");
      setTimeout(() => {
        props.close();
      }, 1500);
    }
  };
  return (
    <>
      <Modal
        className="modalstart"
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="modalhead" closeButton>
          <Modal.Title>Book here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalbody">
            <Container>
              <label className="modallable"> Number of Persons: </label>
              <br />
              <div className="persons">
                <button onClick={decrement}>-</button>
                <input
                  className="modalinput-persons"
                  placeholder="enter here"
                  value={ticketval}
                  onChange={(e) => setticketval(e.target.value)}
                ></input>
                <button onClick={increment}>+</button>
                <br />
              </div>
              <label className="modallable">Name: </label>
              <br />
              <input
                className="modalinput"
                type="text"
                placeholder="enter Name"
                value={names}
                onChange={(e) => setnames(e.target.value)}
                required
              ></input>
              <br />
              <label className="modallable">Email: </label>
              <br />
              <input
                className="modalinput"
                type="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              ></input>
              <br />
              <label className="modallable">Phone Number: </label>
              <br />
              <input
                className="modalinput"
                type="number"
                placeholder="enter number"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
                required
              ></input>
              <br />
              <label className="modallable">Age: </label>
              <br />
              <input
                className="modalinput"
                type="number"
                placeholder="enter age"
                value={age}
                onChange={(e) => setage(e.target.value)}
                required
              ></input>
              <br />
              <label className="modallable">Gender: </label>
              <br />
              <input
                className="modalinput"
                type="text"
                placeholder="enter gender"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
                required
              ></input>
              <br />
              <label className="modallable">Date of Journey: </label>
              <br />
              <input
                className="modalinput"
                type="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                required
              ></input>
              <br />
              <h3>
                Total:
                <span className="totalAmount">
                  &#8377;{props.serviceNumber.pprice * ticketval}
                </span>
              </h3>
            </Container>
            <ToastContainer />
          </div>
        </Modal.Body>
        <Modal.Footer className="modalhead">
          <Button variant="primary" onClick={bookHandler}>
            Book Now
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalReady;
