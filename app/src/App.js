import React from "react";
import { ReactComponent as FooterLogoImage } from "./assets/uscis-logo.svg";
import { ReactComponent as IdentifierLogoImage } from "./assets/dhs-seal.svg";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import {
  GovBanner,
  SummaryBox,
  SummaryBoxContent,
  Footer,
  FooterNav,
  Grid,
  GridContainer,
  Logo,
  SocialLinks,
  SocialLink,
  Identifier,
  IdentifierIdentity,
  IdentifierMasthead,
  IdentifierLogos,
  IdentifierLogo,
  IdentifierLinks,
  IdentifierGov,
  Link,
} from "@trussworks/react-uswds";

export default function App() {
  const returnToTop = (
    <GridContainer className="usa-footer__return-to-top">
      <a href="#">Return to top</a>
    </GridContainer>
  );
  const socialLinkItems = [
    <SocialLink key="facebook" name="Facebook" href="#" />,
    <SocialLink key="twitter" name="Twitter" href="#" />,
    <SocialLink key="youtube" name="YouTube" href="#" />,
    <SocialLink key="instagram" name="Instagram" href="#" />,
    <SocialLink key="rss" name="RSS" href="#" />,
  ];
  const footerPrimary = (
    <FooterNav
      aria-label="Footer navigation"
      size="medium"
      links={[
        <a href="javascript:void(0)" className="usa-footer__primary-link">
          Documentation
        </a>,
        <a href="javascript:void(0)" className="usa-footer__primary-link">
          Features
        </a>,
        <a href="javascript:void(0)" className="usa-footer__primary-link">
          Getting started
        </a>,
        <a href="javascript:void(0)" className="usa-footer__primary-link">
          About us
        </a>,
      ]}
    />
  );

  const footerSecondary = (
    <>
      <Grid row gap>
        <Logo
          size="medium"
          image={
            <FooterLogoImage
              className="usa-footer__logo-img"
              aria-label="USCIS"
            />
          }
        />
        <Grid
          className="usa-footer__contact-links"
          mobileLg={{
            col: 6,
          }}
        >
          <SocialLinks links={socialLinkItems} />
          <p className="usa-footer__contact-heading">Contact USCIS</p>
        </Grid>
      </Grid>
    </>
  );

  return (
    <div className="app">
      <div className="container">
        <GovBanner />
        <SummaryBox>
          <SummaryBoxContent>
            You'll need to know:
            <p>
              Your Social Security Number (SSN) or your Individual Tax
              Identification Number (ITIN).
            </p>
          </SummaryBoxContent>
        </SummaryBox>

        <Footer
          returnToTop={returnToTop}
          primary={footerPrimary}
          secondary={footerSecondary}
        />
        <Identifier className="bg-primary-dark">
          <IdentifierMasthead aria-label="Agency identifier">
            <IdentifierLogos>
              <IdentifierLogo href="#">
                <IdentifierLogoImage />
              </IdentifierLogo>
            </IdentifierLogos>
            <IdentifierIdentity domain="USCIS.gov">
              <span aria-hidden="true">An</span>
              {` official website of the `}
              <Link href="#">U.S. Department of Homeland Security</Link>
            </IdentifierIdentity>
          </IdentifierMasthead>
          <IdentifierLinks
            navProps={{
              "aria-label": "Important links",
            }}
          >
            testLinks
          </IdentifierLinks>
          <IdentifierGov aria-label="U.S. government information and services">
            testIdentifierGovContent
          </IdentifierGov>
        </Identifier>
      </div>
    </div>
  );
}
