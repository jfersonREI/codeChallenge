import "./DashButton.scss";

function DashButton({ label, icon, isExternal, onClick }) {
  const classNames = (array) => array?.filter(Boolean).join(" ");

  return (
    // Using in JSX

    <button
      className={classNames([
        "dash-button",
        isExternal && "dash-button--is-external",
      ])}
      onClick={onClick}
    >
      <span className="dash-button__icon">{icon}</span>
      <span className="dash-button__label">{label}</span>
    </button>
  );
}

export default DashButton;
