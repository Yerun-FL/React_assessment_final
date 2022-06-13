import { React, useState } from "react";
import "./FromTo.css";
import { Container, Form, Button } from "react-bootstrap";
import Navbartwo from "./Navbartwo";
import Modals from "./Modal";

const FromTo = () => {
  const [fromInput, setfromInput] = useState("");
  const [toInput, setpasswordInput] = useState("");
  const [foundbuses, setfoundbuses] = useState();
  const [openModal, setopenModal] = useState(false);
  const [busNumber, setbusNumber] = useState();

  const closeModal = () => {
    setopenModal(false);
  };

  const busArray = [
    {
      Service_Number: 778545,
      pick: "Hyderabad",
      drop: "Visakhaptnam",
      picktime: "6:50 AM",
      droptime: "1:00 PM",
      price: 965,
      rating: 4.5,
      seats: 11,
    },
    {
      Service_Number: 549863,
      pick: "Hyderabad",
      drop: "Visakhaptnam",
      picktime: "4:00 PM",
      droptime: "1:30 Am",
      price: 565,
      rating: 4.0,
      seats: 22,
    },
    {
      Service_Number: 112665,
      pick: "Visakhaptnam",
      drop: "Hyderabad",
      picktime: "12:00 PM",
      droptime: "6:00 AM",
      price: 700,
      rating: 4.2,
      seats: 3,
    },
    {
      Service_Number: 521785,
      pick: "Vijayawada",
      picktime: "6:00 AM",
      droptime: "1:00 PM",
      drop: "Hyderabad",
      price: 570,
      rating: 3.7,
      seats: 23,
    },
    {
      Service_Number: 521165,
      pick: "Mumbai",
      picktime: "6:00 AM",
      droptime: "1:00 PM",
      drop: "Hyderabad",
      price: 610,
      rating: 4.2,
      seats: 13,
    },
    {
      Service_Number: 521154,
      pick: "Mumbai",
      picktime: "5:30 AM",
      droptime: "12:00 PM",
      drop: "Hyderabad",
      price: 1200,
      rating: 4.2,
      seats: 30,
    },

    {
      Service_Number: 521641,
      pick: "Visakhaptnam",
      drop: "Vijayawada",
      picktime: "6:00 AM",
      droptime: "1:00 PM",
      price: 587,
      rating: 4.2,
      seats: 22,
    },
    {
      Service_Number: 521852,
      pick: "Visakhaptnam",
      drop: "Vijayawada",
      picktime: "4:00 AM",
      droptime: "12:45 PM",
      price: 587,
      rating: 4.5,
      seats: 23,
    },
    {
      Service_Number: 521741,
      pick: "Bangalore",
      drop: "Hyderabad",
      picktime: "4:50 AM",
      droptime: "5:45 PM",
      price: 587,
      rating: 3.8,
      seats: 13,
    },
    {
      Service_Number: 521567,
      pick: "Bangalore",
      drop: "Hyderabad",
      picktime: "4:50 AM",
      droptime: "6:00 PM",
      price: 587,
      rating: 4.2,
      seats: 15,
    },
    {
      Service_Number: 425125,
      pick: "Hyderabad",
      drop: "Bangalore",
      picktime: "12:00 Pm",
      droptime: "12:45 AM",
      price: 844,
      rating: 4.0,
      seats: 5,
    },
    {
      Service_Number: 423658,
      pick: "Bangalore",
      drop: "Visakhaptnam",
      picktime: "6:00 PM",
      droptime: "1:00 AM",
      price: 654,
      rating: 3.5,
      seats: 23,
    },
    {
      Service_Number: 646464,
      pick: "Bangalore",
      drop: "Visakhaptnam",
      picktime: "9:00 PM",
      droptime: "12:00 AM",
      price: 354,
      rating: 3.8,
      seats: 22,
    },
    {
      Service_Number: 131651,
      pick: "Visakhaptnam",
      drop: "Bangalore",
      picktime: "3:00 AM",
      droptime: "9:00 PM",
      price: 850,
      rating: 3.8,
      seats: 15,
    },
    {
      Service_Number: 346589,
      pick: "Visakhaptnam",
      drop: "Bangalore",
      picktime: "6:00 AM",
      droptime: "11:45 PM",
      price: 650,
      rating: 3.5,
      seats: 14,
    },
    {
      Service_Number: 412593,
      pick: "Hyderabad",
      drop: "Mumbai",
      picktime: "3:00 AM",
      droptime: "12:30 PM",
      price: 684,
      rating: 4.0,
      seats: 11,
    },
    {
      Service_Number: 369851,
      pick: "Mumbai",
      drop: "Bangalore",
      picktime: "2:00 AM",
      droptime: "1:00 Am",
      price: 958,
      rating: 4.0,
      seats: 8,
    },
    {
      Service_Number: 369851,
      pick: "Mumbai",
      drop: "Visakhaptnam",
      picktime: "2:30 AM",
      droptime: "12:00 Am",
      price: 958,
      rating: 4.0,
      seats: 8,
    },
  ];
  localStorage.setItem("busArray", JSON.stringify(busArray));

  const busData = localStorage.getItem("busArray");
  const dataBus = JSON.parse(busData);
  // console.log(dataBus);

  const fromHandler = (e) => {
    setfromInput(e.target.value);
  };

  const toHandler = (e) => {
    setpasswordInput(e.target.value);
  };
  // search function..
  const searchHandler = (event) => {
    event.preventDefault();

    const foundbuses = dataBus.filter(
      (e) => e.pick === fromInput && e.drop === toInput
    );
    console.log(foundbuses);
    setfoundbuses(foundbuses);
  };
  console.log(foundbuses);

  return (
    <div className="fromtobody">
      <div>
        <Navbartwo />
        <p className="para">Search for bus tickets</p>
        <div className="busimg"></div>
      </div>

      <Container className="inputs">
        <Form.Label className="label">From:</Form.Label>
        <Form.Select className="w-25 inp" onChange={fromHandler}>
          <option className="none">FROM</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Visakhaptnam">Visakhapatnam</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Vijayawada">Vijayawada</option>
        </Form.Select>

        <Form.Label className="label">To:</Form.Label>
        <Form.Select className="w-25 inp" onChange={toHandler}>
          <option className="none">TO</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Visakhaptnam">Visakhapatnam</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Vijayawada">Vijayawada</option>
        </Form.Select>
        <Button
          onClick={searchHandler}
          className="btn-seacrh"
          variant="success"
        >
          Search
        </Button>
      </Container>
      <div>
        {foundbuses !== undefined &&
          foundbuses.map((event) => (
            <Container key={event.Service_Number} className="display">
              <div className="details1">
                <h2 className="space">
                  Bus number :
                  <span className="detailno"> {event.Service_Number}</span>{" "}
                </h2>
                <h3 className="space">
                  Pick Location :<span className="detailno"> {event.pick}</span>
                </h3>
                <h3 className="space">
                  Pick-up :<span className="detailno"> {event.picktime}</span>
                </h3>
              </div>

              <div>
                <h3 className="space">
                  Seats Available:
                  <span className="detailno"> {event.seats}</span>
                </h3>
                <h1 className="redcolor">&#8594;</h1>
              </div>

              <div className="details2">
                <h3 className="space">
                  Ticket Price :
                  <span className="detailno"> &#8377;{event.price}</span>
                </h3>
                <h3 className="space">
                  Drop Location :<span className="detailno"> {event.drop}</span>
                </h3>
                <h3 className="space">
                  Drop :<span className="detailno"> {event.droptime}</span>
                </h3>
              </div>

              <div>
                <h4 className="rating">
                  &#9734;
                  {event.rating}
                </h4>
                <Button
                  variant="success"
                  onClick={() => {
                    setopenModal(true);
                    setbusNumber({
                      sno: event.Service_Number,
                      pname: event.pick,
                      dname: event.drop,
                      pprice: event.price,
                    });
                  }}
                >
                  Book now
                </Button>
              </div>
            </Container>
          ))}
      </div>
      {openModal && <Modals serviceNumber={busNumber} close={closeModal} />}
    </div>
  );
};
export default FromTo;
