import "./Home.css";
import logo from "../Images/logohome2.png";
import banner from "../Images/Banner.jpg";
import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import pics from "../Images/bookingseats.png";

const Home = () => {
  return (
    <div>
      {/* Nav-Bar Section*/}
      <div className="navbar">
        <img src={logo} className="homelogo" />
        <div className="nav-btns">
          <Button className="navbutton login">
            <Link className="regHome" to="./login">
              Log in
              <br />
              &#8594;
            </Link>
          </Button>
          <Button className="navbutton">
            <Link className="regHome" to="./register">
              Register Now
              <br />
              &#8594;
            </Link>
          </Button>
        </div>
      </div>
      {/* Banner section */}
      <div className="banner">
        <img src={banner} className="bannerimg" />
      </div>

      {/* grid section */}
      <div className="girdSec">
        <Container fluid>
          <Row>
            <Col className="colHead">
              <h4 className="headings">Our Buses</h4>
              <p>
                A coach (or motorcoach) is a bus used for longer-distance
                service, in contrast to transit buses that are typically used
                within a single metropolitan region. Often used for touring,
                intercity, and international bus service, coaches are also used
                for private charter for various purposes. Coaches are also
                related and fall under a specific category
              </p>
            </Col>
            <Col className="colHead">
              <h4 className="headings"> Street Map</h4>
              <p>
                The main role of street maps has generally been to help people
                navigate when walking, or when using private motor vehicles on
                the public highway system. Public transport provides an
                alternative which is often faster, more environmentally
                sustainable, and sometimes even more convenient. Unlike with
                walking and driving, where it's enough for maps to simply
                describe the street and footpath layout
              </p>
            </Col>
            <Col className="colHead">
              <h4 className="headings">Design</h4>
              <p>
                Transit buses used to be mainly high-floor vehicles. However,
                they are now increasingly of low-floor design and optionally
                also 'kneel' air suspension and have ramps to provide access for
                wheelchair users and people with baby carriages, sometimes as
                electrically or hydraulically extended under-floor constructs
                for level access. Prior to more general use of such technology.
              </p>
            </Col>
          </Row>
        </Container>
        <hr />
      </div>

      {/* Easy booking section */}
      <div className="bookingSection">
        <Container>
          <h2 className="bookingshead"> Easy Bookings! </h2>
          <Row>
            <Col>
              <div className="textBooking">
                <h2 className="textheadBook">Easy Book</h2>
                <p>
                  Bus stops should, for more simplicity and ease, be added as a
                  node at the location of the pole or shelter. Some stops have
                  been added as ways or polygons, which is completely valid,
                  however, adding the stops as nodes keeps the route cleaner and
                  easier to maintain. Some people use stop position nodes on the
                  way covered by the route as well as using a node beside the
                  road. Using a public_transport=stop_position node on the
                  highway can be useful in some rare cases, but is usually
                  unnecessary. The simple and encouraged way to add a bus stop
                  is as a node at the location of the pole or shelter. If a bus
                  station is present with several stops all part of the same
                  station, a stop area relation should be used to indicate that
                  the stops are all part of the same station. Only the
                  individual stops, and not the stop area relation, should be
                  added to bus routes.
                </p>
              </div>
            </Col>
            <Col>
              <div className="bookingimage">
                <img src={pics} width="70%" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* footer section */}
      <div className="footer">
        <h4> copyrights &copy; Travel</h4>
      </div>
    </div>
  );
};

export default Home;
