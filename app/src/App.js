import React from "react";
import AppFooter from "./components/Layout/AppFooter";
import AppHeader from "./components/Layout/AppHeader/AppHeader";
import AppMain from "./components/AppMain/AppMain";
import CaseReviewHeader from "./components/CaseReviewHeader/CaseReviewHeader";
import CaseReviewOverview from "./components/CaseReviewOverview/CaseReviewOverview";
import CaseExpandButton from "./components/CaseExpandButton/CaseExpandButton";

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

        <AppMain>
          <CaseReviewHeader />
          <CaseReviewOverview />

          <CaseExpandButton label="Case summary" expanded="false" />
          <CaseExpandButton label="Case comments" expanded="true" />

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
        </AppMain>

        <AppFooter />
      </div>
    </div>
  );
}
