import "./IconButton.scss";

const IconButton = ({ icon, label, ...props }) => {
  return (
    <button class="icon-button" aria-label={label}>
      {props.children}
      {icon}
    </button>
  );
};

export default IconButton;
