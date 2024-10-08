import "./CaseReviewHeader.scss";
import IconButton from "../IconButton/IconButton";
import { ReactComponent as IconAdditional } from "../../assets/icons/icon-additional.svg";
import { Button } from "@trussworks/react-uswds";

function CaseReviewHeader() {
  function sayClick() {
    alert("Click!");
  }
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
        <Button type="button">Open evidence</Button>
        <IconButton
          label="More actions"
          icon={<IconAdditional />}
          onClick={sayClick}
        />
      </div>
    </div>
  );
}

export default CaseReviewHeader;
