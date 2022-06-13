import React from "react";
import { Button, Container } from "react-bootstrap";
import "./MyBookings.css";
import { useNavigate } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";

function MyBookings() {
  const navigate = useNavigate();
  const booked = localStorage.getItem("Booked-Person");
  const BookedBusses = JSON.parse(booked);

  const backHandler = () => {
    navigate("/fromto", { replace: true });
  };

  return (
    <div className="MyBookingsbody">
      <h3 className="bookhead">My Bookings</h3>

      <Button className="back-btn" onClick={backHandler}>
        Back
      </Button>

      {BookedBusses?.map((e) => {
        console.log(e);
        return (
          <Container className="colbooked">
            <div>
              <div className="showBooked">
                <div className="sub">
                  <h5>
                    Bus Number:<span className="sub1"> {e.Bus_Number} </span>
                  </h5>
                  |
                  <h5>
                    Pick up:<span className="sub1">{e.pick_Name}</span>
                  </h5>
                  |
                  <h5>
                    Drop:<span className="sub1">{e.drop_Name}</span>
                  </h5>
                </div>

                <h2>
                  Name : <span className="bkshow"> {e.Name}</span>
                </h2>
                <h2>
                  Email :<span className="bkshow"> {e.Email}</span>
                </h2>
                <h2>
                  Number :<span className="bkshow"> {e.Number}</span>
                </h2>
                <h2>
                  Age :<span className="bkshow"> {e.Age}</span>
                </h2>
                <h2>
                  Gender :<span className="bkshow"> {e.Gender}</span>
                </h2>
                <h2>
                  DOJ :<span className="bkshow"> {e.Date}</span>
                </h2>
                <h2>
                  Total:
                  <span className="bkshow">&#8377;{e.tickVal * e.p_price}</span>
                </h2>

                <h1>
                  Status : <span className="booked">Booked &#10003;</span>
                </h1>
              </div>
            </div>
          </Container>
        );
      })}
    </div>
  );
}

export default MyBookings;
