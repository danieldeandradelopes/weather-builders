import PropTypes from "prop-types";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Alert({ title, type, open }) {
  const notify = () => toast[type](title);
  useEffect(() => {
    if (open) {
      notify();
    }
  }, [open]);
  return (
    <div>
      <ToastContainer closeButton />
    </div>
  );
}

Alert.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  open: PropTypes.bool,
};

Alert.defaultProps = {
  title: "Sucesso!",
  type: "success",
  open: false,
};

export default Alert;
