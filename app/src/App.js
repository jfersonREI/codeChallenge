import React from "react";
import AppFooter from "./components/Layout/AppFooter";
import AppHeader from "./components/Layout/AppHeader/AppHeader";
import AppMain from "./components/AppMain/AppMain";
import CaseReviewHeader from "./components/CaseReviewHeader/CaseReviewHeader";
import CaseReviewOverview from "./components/CaseReviewOverview/CaseReviewOverview";
import CaseExpand from "./components/CaseExpand/CaseExpand";
import CaseExpandButton from "./components/CaseExpandButton/CaseExpandButton";
import CaseExpandContent from "./components/CaseExpandContent/CaseExpandContent";
import CaseExpandSectionHeader from "./components/CaseExpandSectionHeader/CaseExpandSectionHeader";

import Divider from "./components/Divider/Divider";

import { GovBanner } from "@trussworks/react-uswds";

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <GovBanner />
        <AppHeader />

        <AppMain>
          <CaseReviewHeader />
          <CaseReviewOverview />
          <CaseExpand>
            <CaseExpandButton label="Case summary" expanded="false" />
            <CaseExpandButton label="Case comments" expanded="true" />
            <CaseExpandContent>
              <CaseExpandSectionHeader label="Company information"></CaseExpandSectionHeader>
              sss
              <Divider color="#dfe1e2" />
              mmm
              <Divider color="#dfe1e2" />
              nnn
              <CaseExpandSectionHeader label="Petition information"></CaseExpandSectionHeader>
            </CaseExpandContent>

            <CaseExpandButton label="Evidence" expanded="false" />
            <CaseExpandButton label="Decision" expanded="false" />
          </CaseExpand>
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
