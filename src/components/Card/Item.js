import PropTypes from "prop-types";

function Item({ title = "", value = "" }) {
  return (
    <div>
      <strong>
        {title}
        :
      </strong>
      <span>{value}</span>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

Item.defaultProps = {
  title: "",
  value: "",
};

export default Item;
