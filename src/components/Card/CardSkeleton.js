import "./styles.css";
import Skeleton from "react-loading-skeleton";

function CardSkeleton() {
  return (
    <>
      <Skeleton height={250} />
      <div className="card-body">
        <Skeleton width={400} height={250} />
        <Skeleton width={400} height={250} />
      </div>
    </>
  );
}

export default CardSkeleton;
