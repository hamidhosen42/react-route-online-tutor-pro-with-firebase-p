import { Link, useParams } from "react-router-dom";
import './ServiceDetails.css';

const ServiceDetail = () => {
  const { serviceId } = useParams();

  var serviceName;

  for (var i = 0; i < 6; i++) {
    if (serviceId == 1) {
      serviceName = "MATH";
    } else if (serviceId == 2) {
      serviceName = "PHYSICS";
    } else if (serviceId == 3) {
      serviceName = "CHEMISTRY";
    } else if (serviceId == 4) {
      serviceName = "BIOLOGY";
    } else if (serviceId == 5) {
      serviceName = "ENGLISH";
    } else {
      serviceName = "BANGLA";
    }
  }
  return (
    <div>
      <h2 className="text-center mt-5">
        Please Checkout your {serviceName} Course
      </h2>
      <div className="text-center mt-5 margin-button">
        <Link to="/checkout">
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;