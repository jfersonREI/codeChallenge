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
import CaseFieldGroup from "./components/CaseFieldGroup/CaseFieldGroup";
import CaseFieldInfoBlock from "./components/CaseFieldInfoBlock/CaseFieldInfoBlock";

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
              <CaseFieldGroup>
                <CaseFieldInfoBlock label="Company name" value="Unspecified" />
                <CaseFieldInfoBlock
                  label="Federal employer identification number  (FEIN)"
                  value="541234444"
                />
              </CaseFieldGroup>
              <Divider />
              <CaseFieldGroup>
                <CaseFieldInfoBlock
                  label="Requested nonimmigrant classification"
                  value="H2A"
                />
              </CaseFieldGroup>
              <Divider />
              <CaseFieldGroup>
                <CaseFieldInfoBlock
                  label="Requested action"
                  value="A - Notify the office in part 4, so each beneficiary can obtain a visa or be admitted"
                />
                <CaseFieldInfoBlock
                  label="Total number of employees"
                  value="10"
                />
                <CaseFieldInfoBlock
                  label="Basis for classification"
                  value="A - New employment"
                />{" "}
                <CaseFieldInfoBlock
                  label="Basis for classification"
                  value="A - New employment"
                />
              </CaseFieldGroup>
              <CaseExpandSectionHeader label="Petition information"></CaseExpandSectionHeader>
              <CaseFieldGroup>
                <CaseFieldInfoBlock label="Company name" value="Unspecified" />
                <CaseFieldInfoBlock
                  label="Federal employer identification number  (FEIN)"
                  value="541234444"
                />
              </CaseFieldGroup>
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
