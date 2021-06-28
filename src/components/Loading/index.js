import "./styles.css";
import Loader from "react-loader-spinner";

function Loading() {
  return (
    <div className="container-loading">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={4000} // 3 secs
      />
    </div>
  );
}

export default Loading;
