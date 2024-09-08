import "./CaseReviewHeader.scss";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as IconAdditional } from "../../assets/icons/icon-additional.svg";

function CaseReviewHeader() {
  return (
    <div className="case-review-header">
      <div className="case-review-header__details">
        <div className="case-review-header__title">
          Case review - <span>IOE0948675338</span>
        </div>
        <div className="case-review-header__description">
          I-129 - Petition for a Nonimmigrant Worker - H2A
        </div>
      </div>
      <div className="case-review-header__actions">
        <button>Open evidence</button>
        <IconButton label="More actions" icon={<IconAdditional />} />
      </div>
    </div>
  );
}

export default CaseReviewHeader;
