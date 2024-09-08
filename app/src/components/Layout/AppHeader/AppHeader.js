import React from "react";
import { ReactComponent as HeaderLogoImage } from "../../../assets/uscis-logo.svg";
import AvatarText from "../../Avatar/AvatarText";
import IconButton from "../../IconButton/IconButton";
import "./AppHeader.scss";

import { Button } from "@trussworks/react-uswds";

function AppHeader() {
  return (
    <>
      <div className="app-header">
        <div className="grid-container">
          <div className="app-header__container">
            <div className="app-header__logo">
              <a href="/" className="app-header__logo-link">
                <HeaderLogoImage className="app-header__logo-image" />
              </a>
            </div>
            <div className="app-header__actions">
              <ul className="app-header-action-list">
                <li className="app-header-action-list__item">
                  <Button>ELIS Assistant</Button>
                </li>
                <li className="app-header-action-list__item">
                  <IconButton />
                </li>
                <li className="app-header-action-list__item">
                  <AvatarText />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppHeader;
