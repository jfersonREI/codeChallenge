import "./CaseExpandContent.scss";

function CaseExpandContent(props) {
  return (
    <div className="case-expand-content">
      <div className="case-expand-content__content-region">
        {props.children}
      </div>
    </div>
  );
}

export default CaseExpandContent;
