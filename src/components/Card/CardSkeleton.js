import "./styles.css";
import Skeleton from "react-loading-skeleton";

function CardSkeleton() {
  return (
    <>
      <Skeleton className="card-header" />
      <div className="card-body">
        <Skeleton className="card-body-item left" />
        <Skeleton className="card-body-item right" />
      </div>
    </>
  );
}

export default CardSkeleton;
