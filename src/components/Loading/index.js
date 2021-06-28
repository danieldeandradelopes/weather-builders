import "./styles.css";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div className="container-loading">
      <Loader
        type="Oval"
        color="#2B244D"
        height={100}
        width={100}
        timeout={4000}
      />
    </div>
  );
}

export default Loading;
