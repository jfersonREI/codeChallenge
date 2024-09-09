import "./Divider.scss";

function Divider({ color = "black", height = 1 }) {
  return (
    <hr
      className="divider"
      style={{
        backgroundColor: color,
        height: height,
        border: "none",
      }}
    />
  );
}

export default Divider;
