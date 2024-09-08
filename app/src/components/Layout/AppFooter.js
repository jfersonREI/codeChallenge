import React from "react";
import { ReactComponent as FooterLogoImage } from "../../assets/uscis-logo.svg";
import { ReactComponent as IdentifierLogoImage } from "../../assets/dhs-seal.svg";

import {
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
  IdentifierLinkItem,
  IdentifierLink,
  IdentifierGov,
  Link,
} from "@trussworks/react-uswds";

export default function App() {
  const returnToTop = (
    <GridContainer className="usa-footer__return-to-top">
      <a href="/">Return to top</a>
    </GridContainer>
  );
  const socialLinkItems = [
    <SocialLink
      key="facebook"
      name="Facebook"
      href="https://www.facebook.com/uscis"
    />,
    <SocialLink
      key="twitter"
      name="Twitter"
      href="https://www.twitter.com/uscis"
    />,
    <SocialLink
      key="youtube"
      name="YouTube"
      href="https://www.youtube.com/uscis"
    />,
    <SocialLink
      key="instagram"
      name="Instagram"
      href="#https://www.instagram.com/uscis"
    />,
    <SocialLink
      key="rss"
      name="RSS"
      href="https://www.linkedin.com/company/uscis"
    />,
  ];
  const footerPrimary = (
    <FooterNav
      aria-label="Footer navigation"
      size="medium"
      links={[
        <a href="/" className="usa-footer__primary-link">
          Documentation
        </a>,
        <a href="/" className="usa-footer__primary-link">
          Features
        </a>,
        <a href="/" className="usa-footer__primary-link">
          Getting started
        </a>,
        <a href="/" className="usa-footer__primary-link">
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
  const testLinks = [
    <IdentifierLinkItem>
      <IdentifierLink href="#">About USCIS</IdentifierLink>
    </IdentifierLinkItem>,
    <IdentifierLinkItem>
      <IdentifierLink href="#">FOIA requests</IdentifierLink>
    </IdentifierLinkItem>,
    <IdentifierLinkItem>
      <IdentifierLink href="#">Office of the Inspector General</IdentifierLink>
    </IdentifierLinkItem>,
    <IdentifierLinkItem>
      <IdentifierLink href="#">Privacy Policy</IdentifierLink>
    </IdentifierLinkItem>,
    <IdentifierLinkItem>
      <IdentifierLink href="#">Accessibility support</IdentifierLink>
    </IdentifierLinkItem>,
    <IdentifierLinkItem>
      <IdentifierLink href="#">No FEAR Act data</IdentifierLink>
    </IdentifierLinkItem>,
    <IdentifierLinkItem>
      <IdentifierLink href="#">Performance reports</IdentifierLink>
    </IdentifierLinkItem>,
  ];

  const testIdentifierGovContent = [
    <>
      <div className="usa-identifier__usagov-description">
        Looking for U.S. government information and services?
      </div>
      :&nbsp;
      <Link href="https://www.usa.gov/">Visit USA.gov</Link>
    </>,
  ];

  return (
    <>
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
          {testLinks}
        </IdentifierLinks>
        <IdentifierGov aria-label="U.S. government information and services">
          {testIdentifierGovContent}
        </IdentifierGov>
      </Identifier>
    </>
  );
}
