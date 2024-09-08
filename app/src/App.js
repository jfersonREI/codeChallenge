import React from "react";
import AppFooter from "./components/Layout/AppFooter";
import AppHeader from "./components/Layout/AppHeader/AppHeader";

import {
  GovBanner,
  SummaryBox,
  SummaryBoxContent,
} from "@trussworks/react-uswds";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <GovBanner />
        <AppHeader />

        <SummaryBox>
          <SummaryBoxContent>
            You'll need to know:
            <p>
              Your Social Security Number (SSN) or your Individual Tax
              Identification Number (ITIN).
            </p>
          </SummaryBoxContent>
        </SummaryBox>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <AppFooter />
      </div>
    </div>
  );
}
