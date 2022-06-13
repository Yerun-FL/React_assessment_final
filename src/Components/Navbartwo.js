import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import pic from "../Images/logo2.png";
import "./Navbartwo.css";

const Navbartwo = () => {
  const navigates = useNavigate();

  function NavTwoHander() {
    toast.success("Logging out");
    setTimeout(() => {
      navigates("/login", { replace: true });
    }, 3000);
  }

  const bookHandler = () => {
    navigates("/MyBookings");
  };

  return (
    <div className="navbar2">
      <img className="done" src={pic} />

      <Button className="book-btn" onClick={bookHandler}>
        My Bookings{" "}
      </Button>
      <Button
        className="d-block ms-auto "
        variant="secondary"
        onClick={NavTwoHander}
      >
        Log out
        <br /> &#8592;
      </Button>
      <ToastContainer hideProgressBar />
    </div>
  );
};
export default Navbartwo;
