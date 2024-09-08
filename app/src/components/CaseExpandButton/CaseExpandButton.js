import "./CaseExpandButton.scss";

function CaseExpandHeader(props) {
  return (
    <button className="case-expand-button" aria-expanded={props.expanded}>
      <span className="case-expand-button__label">{props.label}</span>
    </button>
  );
}

export default CaseExpandHeader;
